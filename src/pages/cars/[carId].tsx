import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SellerBox from '../../components/statelessComponents/SellerBox'
import { getServerSideProps } from '../../services/services'
import styles from '../../styles/Home.module.css'
import { ICar } from '../../types/car.model'
import { IPhotos } from '../../types/photo.model'
import { IPricing } from '../../types/pricing.model'

type CarProps = {
  car: ICar
  photos: IPhotos
  pricing: IPricing
}

const Car: NextPage<CarProps> = (props) => {

  const { car, photos, pricing } = props;
  const router = useRouter()
  
  useEffect(() => {
    //router.push('cars/' + props.cars[0].id)
  },[])
 
  return (
    <div className={styles.container}>
      <div className={styles.car}>

      </div>
      <div className={styles.box}>
        <SellerBox car={car} />
      </div>
    </div>
  )
}

export default Car

export { getServerSideProps }