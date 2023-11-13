import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <div>
      <div>
        <div className='flex justify-center p-4'>
          <Image
            src='/images/logo.jpg'
            alt='Peflab'
            width={200}
            height={200}
          />
        </div>

        <nav className='flex space-x-4 justify-center'>
          <Link href='/' className='hover:underline'>Home</Link>
          <Link href='/docs'className='hover:underline'>Maquinas</Link>
          <Link href='/procedimentos' className='hover:underline'>Procedimentos</Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
