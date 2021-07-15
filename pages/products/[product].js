import React from 'react'
import { createClient } from 'contentful'

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
        <div>
            <img src={product.fields.image['0'].fields.file.url}></img>
            {product.fields.slug}
        </div>
    )
}

export default Product
