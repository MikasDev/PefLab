import React from 'react'
import Image from 'next/image'
import Nav from '../../components/Nav'

const SalHome = () => {
  return (
    <div>
        <Nav/>

        <div className='p-10'>

            <div className='flex justify-center'>
                <div>
                    <Image
                        src='/images/agitador.webp'
                        alt='agitador'
                        width={300}
                        height={300}
                    />
                </div>
            </div>

            <div className='flex justify-center text-2xl font-bold p-5'>
                <h1>Preparo Salmoura</h1>
            </div>

            <div className='flex justify-start border bg-slate-300 rounded-lg p-5'>
                <ol className='list-decimal'>
                    <li> Pesar o sal que será utilizado;</li>
                    <li> Com a ajuda de uma proveta colocar a quantidade de água indicada na metodologia de preparação da salmoura;</li>
                    <li>Colocar o béquer na base magnética do agitador;</li>
                    <li>colocar a barra magnética dentro do béquer;</li>
                    <li>Ligar o equipamento no botão localizado na lateral do equipamento;</li>
                    <li>Colocar o regulador de velocidade na posição 3 (3.000 rpm);</li>
                    <li>Colocar o sal de forma compassada dentro do béquer;</li>
                    <li>Anotar o horário que terminou de colocar o sal e fechar o béquer utilizandopapel filme;</li>
                    <li>Deixar o béquer até que todo o sal seja dissolvido;</li>
                    <li>Desligar o equipamento;</li>
                </ol>
            </div>

        </div>
    </div>
  )
}

export default SalHome 