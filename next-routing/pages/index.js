// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
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
    </div>
  )
}
