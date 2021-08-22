import React, { useState, useEffect } from 'react'
import styles from '../styles/HelloToUser.module.css'

const HelloToUser = () => {

    const [name, setName] = useState('')

    const handleName = () => {
        setName(localStorage.getItem('username'))
    }

    useEffect(() => {
        handleName()
    }, [])

    return (
        <>
            <div className={styles.walls} id='hellomessagetouser'>
                Hey {name} !
            </div>
        </>
    )
}

export default HelloToUser
