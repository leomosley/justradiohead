import DeleteImageButton from "@/components/DeleteImageButton";
import UploadButton from "@/components/UploadButton";
import UploadDropzone from "@/components/UploadDropzone";
import getImages from "@/utils/images/getImages";
import deleteFiles from "@/utils/uploadthing/deleteFiles";
import getFiles from "@/utils/uploadthing/getFiles";
 
export default async function ImageUploader() {
  const files = await getFiles(5);
  const images = await getImages();

  return (
    <section className="flex flex-col items-center justify-between gap-2">
      <span className="text-white">
        {JSON.stringify(files)}
      </span>
      <span className="text-white">
        {JSON.stringify(images)}
      </span>
      <UploadButton
        name="Test Image 3"
        endpoint="imageUploader" 
      />
      <UploadDropzone 
        name="Test Image 3"
        endpoint="imageUploader" 
      />
      <DeleteImageButton id="clwklw84y0003ebhv8z9iuus4" />
    </section>
  );
}