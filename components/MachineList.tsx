import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MachineList = () => {
  return (
    <div className='font-bold p-10'>
      <div className='flex justify-center'>
        <div>
          <Image
            src='/images/viscosimetro.jpg'
            alt='Viscosimetro Faan'
            width={100}
            height={100}
          />
        </div>
      </div>
      
      <div className='flex justify-center p-2'>
        <Link href='/viscosimetro' className='hover:underline'>Viscosimetro Fann</Link>
      </div>

      <div className='flex justify-center p-5'>
        <div>
          <Image
            src='/images/pH.jpg'
            alt='pH de mesa'
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex justify-center p-2">
        <Link href='/Ph' className='hover:underline'>pH de Mesa</Link>
      </div>

      <div className='flex justify-center p-5'>
        <Image
          src='/images/silverson.jpg'
          alt='Agitador Magnetico Silverson'
          width={100}
          height={100}
        />
      </div>

      <div className='flex justify-center p-2'>
        <Link href='/silverson' className='hover:underline'>Agitador Silverson</Link>
      </div>
    </div>
    
  )
}

export default MachineList
