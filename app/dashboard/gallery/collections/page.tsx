import getCollections from '@/utils/collections/getCollections'

export default async function Page() {
  const images = await getCollections();
  return (
    <div className="text-white">{JSON.stringify(images)}</div>
  )
}
