import React from 'react'
import Image from 'next/image'
import { createClient } from 'contentful'
import Head from 'next/head'
import styles from '../../styles/ProductDescription.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, addToCart } from '../../reduxContent/actions'
import GlobalNavbar from '../../components/navbar/GlobalNavbar'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({ content_type: 'product' })

    const paths = res.items.map(item => {
        return {
            params: { product: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({ content_type: 'product', 'fields.slug': params.product })
    return {
        props: {
            product: items[0]
        }
    }
}


const Product = ({ product }) => {

    const dispatch = useDispatch()

    const addToCartButton = () => {
        dispatch(increment())
        dispatch(addToCart(product))
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
                <title>ƎLLIANTE</title>
            </Head>
            <GlobalNavbar />
            <div className={styles.walls}>
                <div className={styles.imageContainer}>
                    <Image loader={contentfulLoader} height='200px' width='500px' className={styles.productImage} src={'https:' + product.fields.image['0'].fields.file.url}></Image>
                </div>
                <div className={styles.buttonsAndInfo}>
                    <h1 className={styles.productInfoH1}>{product.fields.productName}</h1>
                    <h2 className={styles.productInfoH2}>{product.fields.categories[0].fields.title}</h2>
                    <h3 className={styles.productInfoH3}>{product.fields.productDescription}</h3>
                    <h4 className={styles.productInfoH4}>{product.fields.price}e</h4>
                    <div onClick={addToCartButton} className={styles.addToCart}>Add To Cart</div>
                </div>
            </div>
        </>
    )
}

export default Product
