import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { IconButton, Divider, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles({
    popperStyle: {
        height: '50px',
        width: '50px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center'
    }
})

const Navbar = () => {

    const muStyles = useStyles()

    const [openPopper, setOpenPopper] = useState(false)
    const [anchorEl, setAnchroEl] = useState(null)

    const changeOpenPopper = (event) => {
        setOpenPopper(prevOpenPopper => !prevOpenPopper)
        setAnchroEl(event.currentTarget)
    }

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
                                <div id='popperContact' onMouseOver={changeOpenPopper} onMouseLeave={changeOpenPopper} className={styles.wideNavRight4Text2}>
                                    Contact
                                    <Divider />
                                    {/*When popperContact is hovered this component will show up above it*/}
                                    <Popper className={muStyles.popperStyle} placement='top' anchorEl={anchorEl} open={openPopper}>
                                        +1234567890
                                        elliante@gmail.com
                                    </Popper>
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
