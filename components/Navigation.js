import navStyles from '../styles/Nav.module.css'
import Link from "next/link";
import {Navbar, NavbarBrand } from 'react-bootstrap'

const CustomNav = () => {
    return (
        <div className={navStyles.navBar}>
            <Link href="/"> 
                <img src="/logoSVG.svg" className={navStyles.nav}>
                </img>
            </Link>
        </div>
    )
}

export default CustomNav