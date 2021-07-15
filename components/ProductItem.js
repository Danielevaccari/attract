import React from 'react'
import styles from '../styles/Home.module.css'

const ProductItem = ({ item }) => {
    return (
        <>
                <div className={styles.paper}>
                    <img src={item.fields.image['0'].fields.file.url} alt='' className={styles.images}>

                    </img>
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
