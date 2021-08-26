import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ProductItem = ({ item, contentfulLoader }) => {
    return (
        <>
            <div className={styles.paper}>
                <div className={styles.imageContainer}>
                    <Image loader={contentfulLoader} priority height='110px' width='190px' src={'https:' + item.fields.image['0'].fields.file.url} alt='' />
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productInfoLeft}>{item.fields.price}e <br /> {item.fields.productName}</div>
                    <div className={styles.productInfoRight}></div>

                </div>
            </div>
        </>
    )
}

export default ProductItem
