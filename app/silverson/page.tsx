import React from 'react'
import Nav from '../../components/Nav'
import Image from 'next/image'

const SilverHome = () => {
  return (
    <div>
        <Nav/>

        <div className='p1-10'>
            <div className='flex justify-center'>
                <div>
                    <Image
                    src='/images/silverguia.jpg'
                    alt='guia silverson'
                    width={375}
                    height={375}
                    />
                </div>
            </div>

            <div className='flex justify-center font-bold text-2xl p-5'>
                <h1>Utilização da Maquina</h1>
            </div>

            <div className='flex justify-start border bg-white rounded p-5'>
                <ol className='list-decimal'>
                    <li>Ligar o Silverson L5M-A utilizando o botão localizado atrás do equipamento;</li>
                    <li>Colocar o recipiente com água deionizada abaixo da haste giratória;</li>
                    <li>Baixar a cabeça do rotor até que esteja submersa no líquido presente no recipiente;</li>
                    <li>Ajustar a velocidade no regulador analógico de acordo com a metodologia indicada para o preparo do fluido;</li>
                    <li>Adicionar os componentes do fluido na ordem indicada com um espaço de 5 minutos entre cada (ao término da adição de cada componente utilizar o botão Clr para zerar o cronômetro);</li>
                    <li>Durante a adição se houver resquícios de algum componente na cabeça do rotor, zerar a velocidade utilizando o botão analógico e levantar a haste com o regulador de altura e utilizando uma colher limpar a cabeça do rotor;</li>
                    <li>Ao adicionar todos os componentes zerar a velocidade no botão analógico e utilizando o regulador de altura elevar a haste de metal e retirar o recipiente;</li>
                </ol>
            </div>

            <div className='flex justify-center font-bold text-2xl p-5'>
                <h1>Limpeza da maquina</h1>
            </div>

            <div className='flex justify-start border bg-white rounded p-5'>
                <ol className='list-decimal'>
                    <li>Retirar a haste central levantando a jaqueta e com auxílio de uma caneta retirar o pino segurando a haste de metal;</li>
                    <li>Desparafusar a haste de metal dos dois lados;</li>
                    <li>Levar a haste de metal e a haste central para a higienização na pia;</li>
                    <li>Após a higienização na pia levar a haste para o equipamento e posicioná-lo em relação aos parafusos;</li>
                    <li>Parafusar a haste de metal;</li>
                    <li>Colocar o pino na haste central e abaixar a jaqueta;</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default SilverHome