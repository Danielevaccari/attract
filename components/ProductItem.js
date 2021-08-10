import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ProductItem = ({ item }) => {
    return (
        <>
                <div className={styles.paper}>
                    <Image src={item.fields.image['0'].fields.file.url} alt='' className={styles.images}>

                    </Image>
                    <div className={styles.productInfo}>
                        {item.fields.price}e <br /> {item.fields.productName}
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.buttonsLeft}>
                            {item.fields.brand.fields.companyName}
                        </div>
                        <div className={styles.buttonsRight}>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProductItem
