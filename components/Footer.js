import React from 'react'
import styles from '../styles/Footer.module.css'
import { Divider } from '@material-ui/core'

const Footer = () => {
    return (
        <>
            <div className={styles.walls}>
                <Divider style={{width: '100%'}}></Divider>
                <div className={styles.footer}>
                    <footer className={styles.footerContent}>
                        Copyright ƎLLIANTE
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer
