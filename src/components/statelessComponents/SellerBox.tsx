import { FC } from 'react'
import { ICar } from '../../types/car.model'
import styles from './SellerBox.module.css'

type SellerBoxProps = {
    car: ICar
}

const SellerBox: FC<SellerBoxProps> = ({car}) => {
  return (
    <>
      <div className={styles.box}>
        <h1>{car?.vehicle.category + ' ' + car?.vehicle.commercialName}</h1>
        <h1></h1>
        <h2></h2>
        <h3></h3>
        <h3>Contactez</h3>
        <p></p>
        <button></button>
      </div>
    </>
  )
}

export default SellerBox
