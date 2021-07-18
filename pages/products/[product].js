import React from 'react'
import { createClient } from 'contentful'
import Head from 'next/head'
import styles from '../../styles/ProductDescription.module.css'

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
    return (
        <>
            <Head>
                <title>ƎLLIANTE - {product.fields.productName}</title>
            </Head>
            <div className={styles.walls}>
                <div className={styles.imageContainer}>
                    <img className={styles.productImage} src={product.fields.image['0'].fields.file.url}></img>
                </div>
                <div className={styles.buttonsAndInfo}>
                    <h1 className={styles.productInfoH1}>{product.fields.productName}</h1>
                    <h2 className={styles.productInfoH2}>{product.fields.categories[0].fields.title}</h2>
                    <h3 className={styles.productInfoH3}>{product.fields.productDescription}</h3>
                    <h4 className={styles.productInfoH4}>{product.fields.price}e</h4>

                </div>
            </div>
        </>
    )
}

export default Product
