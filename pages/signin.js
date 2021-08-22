import React from 'react'
import styles from '../styles/Signin.module.css'
import GlobalNavbar from '../components/navbar/GlobalNavbar'
import Head from 'next/head'
import { Component } from 'react'
import { Select, TextField, MenuItem, Button } from '@material-ui/core'
import Link from 'next/link'

class signin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSelect = event => {
        this.setState({
            select: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.password} ${this.state.select} `)
    }

    render() {
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
                        <form onSubmit={this.handleSubmit} className={styles.formStyle}>
                            <h3 style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>Log In</h3>
                            <TextField label='Username' className={styles.signInInput} id='uName' type='text' value={this.state.username} onChange={this.handleUsername}></TextField>
                            <br />

                            <TextField label='Password' className={styles.signInInput} id='password' type='text' value={this.state.password} onChange={this.handlePassword}></TextField>
                            <br />
                            <Button disableRipple type='submit' value='Sign In' className={styles.signInSubmit}>Sign In</Button>
                            <Link href='/register'>
                                <Button disableRipple size='small'>Register</Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default signin
