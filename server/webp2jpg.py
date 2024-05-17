import os
from PIL import Image

def convert_webp_to_jpg(directory):
    # Check if the directory exists
    if not os.path.isdir(directory):
        print("Error: Directory not found.")
        return
    
    # Iterate through files in the directory
    for filename in os.listdir(directory):
        if filename.endswith(".webp"):
            # Construct the full file path
            webp_file = os.path.join(directory, filename)
            
            try:
                # Open the webp file
                with Image.open(webp_file) as img:
                    # Remove the ".webp" extension and add ".jpg"
                    jpg_file = os.path.splitext(webp_file)[0] + ".jpg"
                    # Convert and save as jpg
                    img.convert("RGB").save(jpg_file, "JPEG")
                    print(f"Converted {webp_file} to {jpg_file}")
                
                # Delete the original webp file
                os.remove(webp_file)
            
            except Exception as e:
                print(f"Error converting {webp_file}: {e}")

# Specify the directory containing the .webp files
directory_path = "//home/austin/OP/client/public/ParameciaUser"

# Call the function to convert .webp to .jpg
convert_webp_to_jpg(directory_path)
