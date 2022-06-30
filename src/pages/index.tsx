import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getServerSideProps } from '../services/services'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const router = useRouter()

  return (
    <div className={styles.container}>
    </div>
  )
}

export default Home

export { getServerSideProps }