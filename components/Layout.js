import Navigation from './Navigation'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div>
            <Navigation
            />
            <main className={styles.main}>
                {/* <Link href="https://google.com" >
                    <a>
                        <div className={styles.buttonLeft}>
                        </div>
                    </a>
                </Link> */}
                {children}
                {/* <Link href="https://google.com" >
                    <a>
                        <div className={styles.buttonRight}>
                        </div>
                    </a>
                </Link> */}
            </main>
        </div>
    )
}

export default Layout