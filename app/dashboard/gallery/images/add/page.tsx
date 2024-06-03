import ImageUploadForm from "@/site/ImageUploadForm";
import getCollections from "@/utils/collections/getCollections";

export default async function Page() {
  const collections = await getCollections();

  return (
    <div className="flex">
      <ImageUploadForm collections={collections} />
    </div>
  );
}
