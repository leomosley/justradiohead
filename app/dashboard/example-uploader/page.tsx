import UploadButton from "@/components/UploadButton";
import UploadDropzone from "@/components/UploadDropzone";
 
export default function ImageUploader() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-10">
      <UploadButton endpoint="imageUploader" />
      <UploadDropzone endpoint="imageUploader" />
    </section>
  );
}