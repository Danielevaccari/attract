import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import cube from '../public/cube.svg'

const Footer = () => {

    const componentDidMount = () => {
        if (navigator.geolocation) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
    }

    return (
        <>
            <div className={styles.walls}>
                <div className={styles.footer}>
                    <footer className={styles.footerContent}>
                        <div className={styles.footerUp}>
                            - Since 2000 Elliante -
                        </div>

                        <div className={styles.footerBelow}>
                            <div className={styles.footerSocials}>
                                <InstagramIcon />
                                <FacebookIcon />
                                <TwitterIcon />
                            </div>
                            <div className={styles.footerDown}>
                                <div className={styles.footerDownLeft}>
                                    <div>
                                        Stores
                                    </div>
                                    <div>
                                        Payment options
                                    </div>
                                    <div>
                                        Terms of use
                                    </div>
                                    <div>
                                        FAQ
                                    </div>
                                    <div>
                                        Feedback
                                    </div>
                                </div>
                                <div className={styles.footerDownRight}>
                                    <Image priority height='200px' width='200px' src={cube} alt='' />
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer
