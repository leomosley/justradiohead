import getImage from '@/utils/images/getImage';
import React, { Suspense } from 'react'

export default async function Page({ params }: { params: { id: string }}) {
  const image = await getImage(params.id);
  return (
    <Suspense fallback={<div className="text-white">loading...</div>}>
      <div className="text-white">{JSON.stringify(image)}</div>
    </Suspense>
  )
}
