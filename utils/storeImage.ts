import { toastSuccess, toastWarning } from "@/toast";

export default async function storeImage(
  imageURL: string,
  name: string,
  description: string,
) {
  try {
    const response = await fetch('/api/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        imageURL, 
        name, 
        description 
      }),
    });

    if (response.ok) {
      toastSuccess("Image uploaded");
    } else {
      toastWarning("Error uploading image");
    }
  } catch (error) {
    toastWarning("Error uploading image");
    console.error('Error making POST request:', error);
  }
};