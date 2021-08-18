import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { createClient } from 'contentful'
import styles from '../styles/Lookbook.module.css'
import GlobalNavbar from '../components/navbar/GlobalNavbar'

export const getStaticProps = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY
    })
    const response = await client.getEntries({ content_type: 'product' })

    return {
        props: {
            products: response.items
        }
    }
}

const lookbook = ({ products }) => {


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
                <title>
                    ƎLLIANTE - Lookbook
                </title>
            </Head>
            <GlobalNavbar />
            <div className={styles.walls}>
                <div className={styles.container}>
                    {products && products.map((item) => (
                        <Image loader={contentfulLoader} height='600px' width='500px' src={'https:' + item.fields.image['0'].fields.file.url} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default lookbook
