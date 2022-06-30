import { FC, useState } from "react";
import { IPhoto } from "../../types/photo.model";
import styles from './Slider.module.css'

type SliderProps = {
    photos: IPhoto[]
}

const Slider:FC<SliderProps> = ({photos}) => {

    const [x, setX] = useState(0)

    const handleRight = () => {
        if(x !== (-100 * (photos.length-1))){
            setX(x => x - 100)
        }
    }

    const handleLeft = () => {
        x !== 0 ? setX(x => x + 100) : null
    }

    return (
        <div className={styles["full-images"]}>
            {photos.map((p, i) => (
              <img key={i + p.url_full} src={p.url_full} alt="car outside" style={{ maxWidth: "100%", transition: '0.5s', transform: `translateX(${x}%)`}} />
            ))}
            <button disabled={x === (-100 * (photos.length-1))} className={styles.right} onClick={handleRight}>{'>'}</button>
            <button disabled={x === 0} className={styles.left} onClick={handleLeft}>{'<'}</button>
          </div>
    )
}

export default Slider