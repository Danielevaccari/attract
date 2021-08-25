import React from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import GlobalNavbar from '../components/navbar/GlobalNavbar'
import MapLocation from '../components/MapLocation'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { removeFromCart, decrement } from '../reduxContent/actions/index'

const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer)

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
        dispatch(decrement())
    }

    const contentfulLoader = ({ src, quality, width }) => {
        const params = [`w=${width}`];

        if (quality) {
            params.push(`q=${quality}`);
        }

        return `${src}?${params.join('&')}`;
    };


    return (
        <>
            <Head>
                <title> ƎLLIANTE - cart</title>
            </Head>
            <GlobalNavbar />
            <MapLocation />
            <div style={{ width: '100vw', minHeight: '100vh' }}>
                <Grid container>
                    {cart.map(item => (
                        <Grid key={item.id} item xs={4}>
                            <div style={{ margin: '5%' }}>
                                <Image loader={contentfulLoader} priority height='200px' width='250px' src={'https:' + item.content.product.fields.image['0'].fields.file.url} alt=''>

                                </Image>
                                <div className={styles.productInfo}>
                                    <div className={styles.productInfoLeft}>{item.content.product.fields.price}e <br /> {item.content.product.fields.productName}</div>
                                    <div className={styles.productInfoRight}><HighlightOffIcon onClick={() => handleRemoveFromCart(item.id)} /></div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default Cart
