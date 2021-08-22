import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Register.module.css'
import GlobalNavbar from '../components/navbar/GlobalNavbar'
import { setUserInfo } from '../reduxContent/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'


const Register = () => {

    const [select, setSelect] = useState('man')
    const [passwordError, setPasswordError] = useState(false)
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)

    const info = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const handleSubmit = event => {
        //Prevent page from refreshing
        event.preventDefault()
        //Set user state to redux
        dispatch(setUserInfo(
            document.getElementById('usernameRegister').value,
            document.getElementById('passwordRegisterConfirm').value,
            select
        ))
        //Set user state to local storage
        localStorage.setItem('username', document.getElementById('usernameRegister').value)
    }

    const handleDisableSubmitButton = () => {
        if (document.getElementById('passwordRegisterConfirm').value == document.getElementById('passwordRegister').value &&
            document.getElementById('usernameRegister').value !== '' &&
            select !== '') {
            setDisableSubmitButton(false)
        } else {
            setDisableSubmitButton(true)
        }
    }

    const handlePasswordError = () => {
        //Check if user has entered any password
        if (document.getElementById('passwordRegisterConfirm').value !== '' && document.getElementById('passwordRegister').value !== '') {
            //Check if the password is enetered correctly
            if (document.getElementById('passwordRegisterConfirm').value == document.getElementById('passwordRegister').value) {
                //Set error to false if password and password confirmation are the equal
                setPasswordError(false)
                handleDisableSubmitButton()
            }
            //If not equal set password error to true
            else {
                setPasswordError(true)
                handleDisableSubmitButton()
            }
        }
    }

    return (
        <>
            <Head>
                <title>
                    ƎLLIANTE - Register
                </title>
            </Head>
            <GlobalNavbar />
            <div className={styles.walls}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit} className={styles.formStyle}>
                        <h3 style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>Create Account</h3>
                        <TextField required id='usernameRegister' label='Username' type="text" onChange={handlePasswordError} />
                        <br />
                        <TextField required id='passwordRegister' label='Password' type='password' onChange={handlePasswordError} />
                        <br />
                        <TextField required id='passwordRegisterConfirm' label='Confirm Password' type='password' onChange={handlePasswordError} />
                        {passwordError && <Alert severity='error'>
                            <AlertTitle>Error</AlertTitle>
                            Passwords do not match
                        </Alert>}
                        <br />
                        <FormControl>
                            <InputLabel id='gender-select'>Gender</InputLabel>
                            <Select required id='genderRegister' labelId='gender-select' value={select} onChange={event => setSelect(event.target.value)}>
                                <MenuItem type='button' value='man'>Male</MenuItem>
                                <MenuItem type='button' value='woman'>Female</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        <Button disabled={disableSubmitButton} type='submit' disableRipple>Create</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
