import { useRouter } from 'next/router'
import { FC } from 'react'
import { ICar } from '../../types/car.model'
import { IPricing } from '../../types/pricing.model'
import styles from './SellerBox.module.css'

type SellerBoxProps = {
    car: ICar
    pricing: IPricing
}

const SellerBox: FC<SellerBoxProps> = ({car, pricing}) => {

  const router = useRouter()
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.h1}>{car?.vehicle.category + ' ' + car?.vehicle.commercialName}</h1>
        <h1 className={styles.h1}>{car?.vehicle.make}</h1>
        <h2>{pricing?.variation.prices.current + ' €'}</h2>
        {pricing?.variation.prices.isPriceCrossed && <h3 className={styles.h3}>{pricing?.variation.prices.history[0]}</h3>}
        <h3>Contactez le vendeur professionnel</h3>
        <p>CARNEXT RENNES VEHICULES PARTICULIERS</p>
        <button className={styles.button} 
        onClick={() => router.push(`mailto:${car?.contacts.email}?subject=Interested by your ${car?.vehicle.category + ' ' + car?.vehicle.commercialName}&body=Hello, I'm interested about your ${car?.vehicle.category + ' ' + car?.vehicle.commercialName} ...`)}>Contacter le vendeur</button>
      </div>
    </>
  )
}

export default SellerBox
