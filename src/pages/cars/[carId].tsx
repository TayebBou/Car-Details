import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Slider from '../../components/statefullComponents/Slider'
import CarInfos from '../../components/statelessComponents/CarInfos/CarInfos'
import SellerBox from '../../components/statelessComponents/SellerBox/SellerBox'
import { getServerSideProps } from '../../services/services'
import styles from '../../styles/Home.module.css'
import { ICar } from '../../types/car.model'
import { IPhotos } from '../../types/photo.model'
import { IPricing } from '../../types/pricing.model'

type CarProps = {
  cars: ICar[]
  car: ICar
  photos: IPhotos
  pricing: IPricing
}

const Car: NextPage<CarProps> = (props) => {
  const { car, pricing, cars } = props
  const index =  cars.findIndex((c) => c.id === car.id)
  const [carNum, setCarNum] = useState(index)
  const router = useRouter()
  const photos = props.photos.outside.photos
  
  useEffect(() => {
    if (router.asPath !== '/cars/' + cars[carNum].id) {
      router.push(cars[carNum].id)
    }
  }, [carNum])

  const handleBack = () => {
    carNum !== 0 ? setCarNum((x) => x - 1) : null
  }

  const handleNext = () => {
    if (carNum !== cars.length - 1) {
      setCarNum((x) => x + 1)
    }
  }

  useEffect(() => {
    setCarNum(index)
  },[router.asPath])

  return (
    <div className={styles.container}>
      <div className={styles.car}>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => router.back()}>
            Retour
          </button>
          <button
            disabled={carNum === 0}
            className={styles.button}
            onClick={handleBack}
          >
            {'< Précédent'}
          </button>
          <button
            disabled={carNum === cars.length - 1}
            className={styles.button}
            onClick={handleNext}
          >
            {'Suivant >'}
          </button>
        </div>
        <Slider photos={photos} />
        <div>
          <CarInfos car={car} />
        </div>
      </div>
      <div className={styles.box}>
        <SellerBox car={car} pricing={pricing} />
      </div>
    </div>
  )
}

export default Car

export { getServerSideProps }
