import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from '../../styles/Navbar.module.css'
import Popper from '@material-ui/core/Popper';
import Badge from '@material-ui/core/Badge';
import { Divider, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    popperStyle: {
        height: '50px',
        width: '50px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center'
    }
})


const WideNavbar = () => {

    const cartQuantity = useSelector(state => state.counterReducer)

    const muStyles = useStyles()

    const [openPopper, setOpenPopper] = useState(false)
    const [anchorEl, setAnchroEl] = useState(null)

    const changeOpenPopper = (event) => {
        setOpenPopper(prevOpenPopper => !prevOpenPopper)
        setAnchroEl(event.currentTarget)
    }


    return (
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
                            <Badge badgeContent={cartQuantity}>
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
    )
}

export default WideNavbar
