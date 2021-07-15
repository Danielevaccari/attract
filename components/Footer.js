import React from 'react'
import styles from '../styles/Footer.module.css'
import { Divider } from '@material-ui/core'

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <Divider></Divider>
                <footer className={styles.footerContent}>
                    Copyright ƎLLIANTE
                </footer>
            </div>
        </>
    )
}

export default Footer
