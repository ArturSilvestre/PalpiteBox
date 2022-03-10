import React from "react";
import Link from 'next/link';

import styles from './styles.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container flex justify-center items-center">
          <img src="/logo_palpitebox.png" alt="Logo PalpiteBox" />
        </div>
      </div>
      <div className="bg-gray-300 p-4 flex justify-center items-center font-bold space-x-10">
        <Link href='/'>
          <a className="hover:underline">Home</a>
        </Link>
        <Link href='/sobre'>
          <a className="hover:underline">Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className="hover:underline">Contato</a>
        </Link>
      </div>
    </>
  )
}
export default Header;