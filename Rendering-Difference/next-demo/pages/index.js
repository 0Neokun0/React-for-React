import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Next Js pre-rendering</h1>
      <Link href = '/users'>
        <a>Users</a>
      </Link>
    </div>
  )
}
