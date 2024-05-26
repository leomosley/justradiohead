import getCollection from '@/utils/getColleciton';
import React, { Suspense } from 'react'

export default async function Page({ params }: { params: { id: string }}) {
  const image = await getCollection(params.id);
  return (
    <Suspense fallback={<div className="text-white">loading...</div>}>
      <div className="text-white">{JSON.stringify(image)}</div>
    </Suspense>
  )
}
