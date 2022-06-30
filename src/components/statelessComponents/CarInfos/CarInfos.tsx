import { FC } from 'react'
import { ICar } from '../../../types/car.model'
import styles from './CarInfos.module.css'

type CarInfosProps = {
  car: ICar
}

const CarInfos: FC<CarInfosProps> = ({ car }) => {
  return (
    <>
      <h1 className={styles.h1}>Informations générales</h1>
      <h2 className={styles.h2}>
        {car?.vehicle.category + ' ' + car?.vehicle.commercialName}
      </h2>
      <div className={styles.grid}>
        <div className={styles.div1}>
          <p>
            Année : <br />
            Mise en circulation : <br />
            Contrôle technique : <br />
            Kilométrage compteur : <br />
            Energie : <br />
            Boîte de vitesse : <br />
            Couleur extérieur : <br />
            Couleur intérieur : <br />
            Nombre de portes : <br />
            Nombres de places : <br />
          </p>
        </div>
        <div className={styles.div2}>
          <p>
            {car.vehicle.year} <br />
            {car.vehicle.firstCirculationDate} <br />
            non requis <br />
            {car.vehicle.mileage} <br />
            {car.vehicle.energy} <br />
            {car.vehicle.gearbox} <br />
            {car.vehicle.externalColor} <br />
            ... <br />
            {car.vehicle.doors} <br />
            {car.vehicle.seats} <br />
          </p>
        </div>
        <div className={styles.div3}>
          <p>
            Garantie : <br />
            Première main (déclaratif) : <br />
            Nombre de prioriétaires : <br />
            Puissance fiscale : <br />
            Puissance din : <br />
            Crit'Air : <br />
            Emission de CO2 : <br />
            Consommation mixte : <br />
            Normes Euro : <br />
          </p>
        </div>
        <div className={styles.div4}>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default CarInfos
