import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo autem accusamus incidunt laborum temporibus eius labore deserunt pariatur, quisquam officiis, voluptatem doloremque excepturi adipisci ducimus nam. Corrupti, asperiores placeat.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo autem accusamus incidunt laborum temporibus eius labore deserunt pariatur, quisquam officiis, voluptatem doloremque excepturi adipisci ducimus nam. Corrupti, asperiores placeat.</p>
        <Link href="/ninjas"><a className={styles.btn}>See List of People</a></Link>
      </div>
    </>
  )
}
