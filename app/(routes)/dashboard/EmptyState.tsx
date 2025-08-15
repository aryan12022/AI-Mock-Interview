import Image from 'next/image'
import React from 'react'

function EmptyState() {
  return (
    <div className='mt-14'>
        <Image src={'/interview.png'} alt='emptyState'
        width={130}
        height={130}
        />
    </div>
  )
}

export default EmptyState