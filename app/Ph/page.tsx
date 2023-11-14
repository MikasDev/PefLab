import React from 'react'
import Nav from '../../components/Nav'
import Image from 'next/image'
const PhHome = () => {
  return (
    <div>
        <Nav/>

        <div className='p-10'>
            <div className='flex justify-center'>
                <div>
                    <Image
                    src='/images/pHguia.jpg'
                    alt='pH'
                    width={375}
                    height={375}
                    />
                </div>
            </div>

            <div>
                <h1 className='flex justify-center text-2xl font-bold p-5'>Medida pH</h1>
            </div>

            <div className='flex justify-start border bg-slate-300 rounded-lg p-5'>
                <ol className='list-decimal'>
                    <li>Conectar o apararelho na tomada;</li>
                    <li>Ligar no botão ON/OFF;</li>
                    <li>Retirar caneta do recipente com solução de KCL;</li>
                    <li>Fazer a higieniza~çao do eletrodo localizado na ponta da caneta com água deionizada e secar com o auxílio de um papel higiênico;</li>
                    <li>Inserir o eletrodo no recipiente com fluido e mexer suavemente até que o gráfico presente na tela forme uma curva constante;</li>
                    <li>Anotar o pH e a Temperatura registradas;</li>
                </ol>
            </div>

            <div className='flex justify-center text-2xl font-bold p-5'>
                <h1>Limpeza do Equipamento</h1>
            </div>

            <div className='flex justify-start border bg-slate-300 rounded-lg p-5'>
                <ol className='list-decimal'>
                    <li>Retirar a caneta do fluido;</li>
                    <li>Fazer a higienizaão do eletrodo com água deionizada;</li>
                    <li>Secar com o auxílio de um papel higiênico;</li>
                    <li>Colocar a caneta no recipiente com a solução de KCL;</li>
                    <li>Desligar o equipamento</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default PhHome