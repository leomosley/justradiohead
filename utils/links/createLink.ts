import { toastSuccess, toastWarning } from "@/toast";

export default async function createLink(
  data: {
    text: string;
    url: string;
  },
) {
  try {
    const response = await fetch('/api/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      toastSuccess("Link created successfully");
      return response;
    } else {
      throw new Error("Error creating link");
    }
  } catch (error) {
    toastWarning("Error creating link");
    console.log(error);
  }
};


