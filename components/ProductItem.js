import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ProductItem = ({ item }) => {
    return (
        <>
            <div className={styles.paper}>
                <Image priority height='800px' width='500px' src={'https:' + item.fields.image['0'].fields.file.url} alt='' className={styles.images}>

                </Image>
                <div className={styles.productInfo}>
                    {item.fields.price}e <br /> {item.fields.productName}
                </div>
            </div>
        </>
    )
}

export default ProductItem
