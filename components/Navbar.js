import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { IconButton, Divider } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


const Navbar = () => {

    return (
        <>
            <nav id='smallScreen'>
                <div className={styles.navbar}>
                    <div className={styles.toolbar}>
                        <div className={styles.navLeft}>
                            <IconButton disableRipple>
                                <MenuIcon />
                            </IconButton>
                            <Link href='/'>
                                <a>
                                    ƎLLIANTE
                                </a>
                            </Link>
                        </div>

                        <div className={styles.navRight}>
                            <div className={styles.navRightLeft}>

                            </div>

                            <div className={styles.navRightRight}>
                                <Badge badgeContent={5}>
                                    <Link href='/cart'><ShoppingCartIcon /></Link>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav id='wideScreen'>
                <div className={styles.navbarWide}>
                    <div className={styles.wideNavLeft}>
                        <Link href='/'>
                            <div className={styles.logo}>
                                ƎLLIANTE
                            </div>
                        </Link>
                    </div>

                    <div className={styles.wideNavRight}>
                        <div className={styles.wideNavRightTop}>
                            <div className={styles.wideNavRight1}>

                            </div>
                            <div className={styles.wideNavRight2}>
                                <Badge badgeContent={5}>
                                    <Link href='/cart'><ShoppingCartIcon style={{ color: '#000000' }} /></Link>
                                </Badge>
                                <Link href='/signin'>
                                    <div>Sign In</div>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.wideNavRightBottom}>
                            <div className={styles.wideNavRight3}>

                            </div>
                            <div className={styles.wideNavRight4}>
                                <div className={styles.wideNavRight4Text1}>
                                    Lookbook
                                    <Divider />
                                </div>
                                <div className={styles.wideNavRight4Text2}>
                                    Contact
                                    <Divider />
                                </div>
                                <div className={styles.wideNavRight4Text3}>
                                    About
                                    <Divider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
