import React from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/cart.module.css'
import Image from 'next/image'
import { Grid, makeStyles } from '@material-ui/core'
import NarrowNavbar from '../components/navbar/NarrowNavbar'

const useStyles = makeStyles({
    gridStyle: {

    }
})

const cart = () => {

    const muiStyles = useStyles()

    const cart = useSelector(state => state.cartReducer)

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
                <title>cart</title>
            </Head>
            <NarrowNavbar />
            <div style={{ width: '100vw', minHeight: '100vh' }}>
                <Grid container className={muiStyles.gridStyle}>
                    {cart.map(item => (
                        <Grid key={item.id} item xs={4}>
                            <div style={{ margin: '5%' }}>
                                <Image loader={contentfulLoader} priority height='200px' width='250px' src={'https:' + item.content.product.fields.image['0'].fields.file.url} alt=''>

                                </Image>
                                <div className={styles.productInfo}>
                                    {item.content.product.fields.price}e <br /> {item.content.product.fields.productName}
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default cart
