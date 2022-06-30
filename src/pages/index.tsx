import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getServerSideProps } from '../services/services'
import styles from '../styles/Home.module.css'
import { ICar } from '../types/car.model'

type HomeProps = {
  cars: ICar[]
}

const Home: NextPage<HomeProps> = (props) => {

  const router = useRouter()
  
  useEffect(() => {
    router.push('cars/' + props.cars[0].id)
  },[])
 
  return (
    <div className={styles.container}>
      Redirecting ...
    </div>
  )
}

export default Home

export { getServerSideProps }