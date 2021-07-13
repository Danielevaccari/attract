import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


const Navbar = () => {

    return (
        <>
            <nav>
                <div className={styles.navbar}>
                    <div className={styles.toolbar}>
                        <div className={styles.navLeft}>
                            <IconButton disableRipple>
                                <MenuIcon />
                            </IconButton>
                            <Link href='/'>
                                <a>
                                    home
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
        </>
    )
}

export default Navbar
