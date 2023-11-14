import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProcedimentList = () => {
  return (
    <div className='font-bold p-10'>
        <div className="flex justify-center p-5">
            <div>
                <Image
                src='/images/estufa.webp'
                alt='estufa'
                width={100}
                height={100}
                />
            </div>
        </div>

        <div className='flex justify-center p-2'>
            <Link href='/estufa' className='hover:underline'>Medida de Temperatura Estufas</Link>
        </div>

        <div className='flex justify-center p-5'>
            <Image
                src='/images/agitador.webp'
                alt=''
                width={130}
                height={130}
            />
        </div>

        <div className="flex justify-center p-2">
            <Link href='/salmoura' className='hover:underline'>Preparo Salmoura</Link>
        </div>
    </div>
  )
}

export default ProcedimentList