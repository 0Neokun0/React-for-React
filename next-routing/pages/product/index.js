import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'

function ProductList( { productId = 100}) {
  return (
    <>
    <Link href='/'>
    <h1 className={styles.container}>
      Home
    </h1>
    </Link>
    <div className={styles.container}>
        <h2>
          <Link href = '/product/1'>
          <a>
            Product 1
          </a>
          </Link>
        </h2>
        <h2><Link href = '/product/2'>
          <a>
            Product 2
          </a>
          </Link></h2>
        <h2><Link href = '/product/3' replace>
          <a>
            Product 3
          </a>
          </Link></h2>
         <h2><Link href = {`/product/${productId}`}>
          <a>
            Product {productId}
          </a>
          </Link></h2>
    </div>
    </>
  )
}

export default ProductList