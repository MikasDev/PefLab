import React from 'react'
import Nav from '../../components/Nav'
import Image  from 'next/image'

const SalHome = () => {
  return (
    <div>
        <Nav/>

        <div className='p-10'>
            <div className="flex justify-center">
                <div>
                    <Image
                    src='/images/estufa.webp'
                    alt='estufa'
                    width={300}
                    height={300}
                    />
                </div>
            </div>

            <div className="flex justify-center text-2xl font-bold p-5">
                <h1>Termometro Fann</h1>
            </div>

            <div className='flex justify-start border bg-slate-300 rounded-lg p-5'>
                <ol className='list-decimal'>
                    <li>Colocar o Termometro Fann na estufa;</li>
                    <li>Esperar o Termometro estabilizar;</li>
                    <li>Medir a temperatura em °F;</li>
                    <li>Transformar para °C; </li>
                    <li>Anotar na folha referente a estufa</li>
                </ol>
            </div>

            <div className='flex justify-center text-2xl font-bold p-5"'>
                <h1>Termometro de Mercurio</h1>
            </div>

            <div className='flex justify-start border bg-slate-300 rounded-lg p-5'>
                <ol className='list-decimal'>
                    <li>Colocar o Termometro de Mercurio na estufa;</li>
                    <li>Esperar o Termometro estabilizar;</li>
                    <li>Anotar a temperatura na folha referente a estufa;</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default SalHome