import navStyles from '../styles/Nav.module.css'
import Link from "next/link";
import {Navbar, NavbarBrand } from 'react-bootstrap'
import { useRouter } from 'next/router'

const CustomNav = () => {
    const router = useRouter()
    var next = router.pathname === '/' ? '/home' : '/'
    return (
        <div className={navStyles.navBar}>
            <Link href={next}> 
                <img src="/logoSVG.svg" className={navStyles.nav}>
                </img>
            </Link>
        </div>
    )
}

export default CustomNav