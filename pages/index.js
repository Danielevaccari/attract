import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, makeStyles } from '@material-ui/core'
import { createClient } from 'contentful'
import ProductItem from '../components/ProductItem';
import Link from 'next/link'
//This is the href='/'

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

const useStyles = makeStyles({
  paper: {
    height: '90%',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  }
})


export default function Home({ products }) {

  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Store</title>
      </Head>

      <div className={styles.walls}>
        <div className={styles.container}>
          {console.log(products)}
          <Grid container spacing={0}>
            {products && products.map((item) => (
              <Grid square='true' item xs={6} md={4} key={item.sys.id}>
                <Link href={'/products/' + item.fields.slug}>
                  <a className={styles.oneItem}>
                    <ProductItem item={item} />
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}
