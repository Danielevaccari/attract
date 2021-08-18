import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from '../../styles/GlobalNavbar.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import { IconButton } from '@material-ui/core'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import history from 'history';

const GlobalNavbar = () => {

    const cartQuantity = useSelector(state => state.counterReducer)

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
                                <a style={{ textDecoration: 'none', color: 'black' }}>
                                    ƎLLIANTE
                                </a>
                            </Link>
                        </div>

                        <div className={styles.navRight}>
                            <div className={styles.navRightLeft}>
                                <Link href='/signin'>
                                    <div style={{ fontSize: '0.7rem' }}>Sign In</div>
                                </Link>
                            </div>

                            <div className={styles.navRightRight}>
                                <Badge badgeContent={cartQuantity}>
                                    <Link href='/cart'><ShoppingCartIcon /></Link>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* //Botton navbar for phones
            <div style={{ width: '100vw', height: '40px', backgroundColor: 'royalblue', position: 'fixed', bottom: '0px', zIndex: '1000' }}>
                <ArrowBackIcon onClick={() => history.back()} />
            </div> */}
        </>
    )
}

export default GlobalNavbar