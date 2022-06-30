import styles from './Layout.module.css'
import logo from '../../assets/images/logo_lacentrale.png'
import { FC } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <div className={styles.layout}>
        <img src={logo.src} alt="logo Lacentrale" className={styles.logo} />
        <h1 className={styles.h1}>1er site de véhicules d'occasion</h1>
      </div>
      {props.children}
    </>
  )
}

export default Layout
