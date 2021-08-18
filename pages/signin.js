import React from 'react'
import styles from '../styles/Signin.module.css'
import GlobalNavbar from '../components/navbar/GlobalNavbar'
import Head from 'next/head'

const signin = () => {
    return (
        <>
        <Head>
            <title>
            ƎLLIANTE - Sign in
            </title>
        </Head>
            <GlobalNavbar />
            <div className={styles.walls}>
                <div className={styles.container}>
                    <form action='/' className={styles.formStyle}>
                        <label htmlFor='fName'>Username</label>
                        <input className={styles.signInInput} id='uName' type='text'></input>
                        <label htmlFor='lName'>Password</label>
                        <input className={styles.signInInput} id='password' type='text'></input>
                        <input type='submit' className={styles.signInSubmit}></input>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signin
