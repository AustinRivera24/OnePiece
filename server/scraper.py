import requests
from bs4 import BeautifulSoup
from PIL import Image
from io import BytesIO
import os

# Function to download images from a URL
def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        return True
    else:
        return False

# Function to convert image to JPG format
def convert_to_jpg(image_path):
    img = Image.open(image_path)
    if img.format != 'JPEG':
        new_filename = os.path.splitext(image_path)[0] + '.jpg'
        img = img.convert('RGB')
        img.save(new_filename)
        os.remove(image_path)
        return new_filename
    else:
        return image_path

# Main function to scrape the website and download images
def scrape_and_download(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        # Find the table containing the images
        table = soup.find('table')
        if table:
            # Find all image tags within the table
            image_tags = table.find_all('img')
            for idx, img_tag in enumerate(image_tags):
                img_url = img_tag['src']
                filename = f'image_{idx}.png'  # Assuming initial format is PNG
                if download_image(img_url, filename):
                    new_filename = convert_to_jpg(filename)
                    print(f"Downloaded and converted {img_url} to {new_filename}")
                else:
                    print(f"Failed to download {img_url}")
        else:
            print("No table found on the webpage.")
    else:
        print("Failed to retrieve webpage.")

# Example usage
if __name__ == "__main__":
    url = 'https://onepiece.fandom.com/wiki/Zoan'
    scrape_and_download(url)
