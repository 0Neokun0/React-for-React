// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter ()


  const handleClick = () => {
    console.log('Placing Your Order')
    router.push('/product')
  }

  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href = '/blog'>
      <a>
        Blog
      </a>
      </Link>
      <Link href = '/product'>
      <a>
        Product
      </a>
      </Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}
