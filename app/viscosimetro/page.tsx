import React from 'react';
import Nav from '../../components/Nav';
import Image from 'next/image';

const ViscHome = () => {
  return (
    <div>
      <body className=''>
      <Nav />

    <div className='p-10'>
      <div className='flex justify-center'>
        <div>
          <Image
            src='/images/viscguia.jpg'
            alt='guia viscosimetro'
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className='flex justify-center font-bold text-2xl p-5'>
        <h1>Medidas Comuns</h1>
      </div>

      <div className='flex justify-start rounded-lg bg-slate-300  p-5 shadow-lg'>
        <ol>
          <li>1. Colocar o fluido no copo até o ponto máximo para o fluido;</li>
          <li>2. Levantar o copo até a linha indicada no rotor;</li>
          <li>3. Ligar o equipamento na tomada;</li>
          <li>4. Ligar o estabilizador;</li>
          <li>5. Colocar o botão seletor de velocidade para baixo ao mesmo tempo que se coloca o modulador na posição HIGH;</li>
          <li>6. Esperar 2 minutos de agitação e efetuar a leitura do painel de medida e anotar o resultado do L600</li>
          <li>7. Colocar o modulador para a posição Low e após 15 segundos efetuar a leitura do painel de medida e anotar o resultado do L300;</li>
          <li>8. Levantar o seletor de velocidade para a altura máxima e ao mesmo tempo que se move o modulador para a posição high efetuar a leitura do painel de medida quando houver a estabilização do ponteiro anotando o resultado do L200;</li>
          <li>9. Colocar o modulador para a posição Low e após a estabilização do ponteiro no painel de medida anotar o resultado do L100;</li>
          <li>10. Descer o seletor de velocidade para a posição média ao mesmo tempo que se move o modulador para a posição high e efetuar a leitura do painel de medida quando houver a estabilização do ponteiro anotando o resultado do L6;</li>
          <li>11. Colocar o modulador para a posição Low e após a estabilização do ponteiro no painel de medida anotar o resultado L3;</li>
        </ol>
      </div>

      <div className='flex justify-center text-2xl font-bold p-3'>
        <h1>Medida Força Gel</h1>
      </div>

      <div className='border bg-slate-300 rounded-lg shadow-lg p-5'>
        <ol>
          <li>1. Levar o seletor de velocidade para baixo ao mesmo tempo que se move o modulador para a posição High e agitar por 15 segundos na posição L600;</li>
          <li>2. Ao fim dos 15 segundos, levar o seletor de velocidade para a posição média e mover o modulador para a posição central;</li>
          <li>3. Aguardar 10 segundos e levar o modulador para a posição Low e medir o ponto máximo que o ponteiro chega no painel de medição anotando o resultado do G0;</li>
          <li>4. Levar o seletor de velocidade para baixo ao mesmo tempo que se move o modulador para a posição High deixando a agitar por 15 segundos;</li>
          <li>5. Ao fim dos 15 segundos, levar o modulador para a posição central e aguardar 10 minutos;</li>
          <li>6. Ao fim dos 10 minutos, levar o modulador para a posição Low e medir o ponto máximo que o ponteiro chega no painel de medição anotando o resultado do G10</li>
        </ol>
      </div>

      <div className='flex justify-center text-2xl font-bold p-3'>
        <h1>Limpeza do Equipamento</h1>
      </div>

      <div className='border bg-slate-300 rounded-lg shadow-lg p-5'>
        <ol>
          <li>1. Baixar o copo;</li>
          <li>2. Desligar o estabilizador e retirar o equipamento da tomada;</li>
          <li>3. Limpar a parte interna do rotor com auxílio de água deionizada, detergente e uma escova;</li>
          <li>4. Enxugar as partes do rotor;</li>
          <li>5. Remontar o equipamento;</li>
        </ol>
      </div>
    </div>
      </body>
      
    </div>
  );
};

export default ViscHome;
