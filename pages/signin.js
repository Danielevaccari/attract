import React from 'react'
import styles from '../styles/Signin.module.css'

const signin = () => {
    return (
        <>
            <div className={styles.walls}>
                <div className={styles.container}>
                    <form action='/' className={styles.formStyle}>
                        <label for='fName'>Username</label>
                        <input className={styles.signInInput} id='uName' type='text'></input>
                        <label for='lName'>Password</label>
                        <input className={styles.signInInput} id='password' type='text'></input>
                        <input type='submit' className={styles.signInSubmit}></input>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signin
