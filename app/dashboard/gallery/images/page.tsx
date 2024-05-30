import getImages from '@/utils/images/getImages'

export default async function Page() {
  const images = await getImages();
  return (
    <div className="text-white">{JSON.stringify(images)}</div>
  )
}
