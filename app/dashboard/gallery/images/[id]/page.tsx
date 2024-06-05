import EditImage from '@/components/EditImage';
import getImage from '@/utils/images/getImage';
import React from 'react'

export default async function Page({ params }: { params: { id: string }}) {
  const image = await getImage(params.id);
  return ( 
    <div className="flex">
      {image && <EditImage image={image} />}
    </div>
  );
}
