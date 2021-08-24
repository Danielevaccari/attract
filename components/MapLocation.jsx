import React, { Component } from 'react'
import styles from '../styles/MapLocation.module.css'
import Image from 'next/image'

export default class MapLocation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
            latitude: null,
            longitude: null,
            Address: null
        }
    }

    location = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.coordinates, this.error)
        } else {
            alert('Location not available')
        }
    }

    coordinates = (position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    render() {
        return (
            <>
                <button style={{ width: '300px', height: '20px', border: 'none' }} onClick={this.location}>Show location</button>
                <div className={styles.walls}>
                    {this.state.latitude && this.state.longitude ? <Image height='200px' width='300px' src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=17&size=600x500&sensor=false&markers=color:red|${this.state.latitude},${this.state.longitude}&key=${this.state.API_KEY}`} alt='' /> : ''}
                </div>
            </>
        )
    }
}

