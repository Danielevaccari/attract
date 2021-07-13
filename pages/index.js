import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//This is the href='/'

export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await response.json()

  return {
    props: { id: data }
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


export default function Home({ id }) {

  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Store</title>
      </Head>

      <div className={styles.walls}>
        <div className={styles.container}>
          <Grid container spacing={0}>
            {id.slice(0, 41).map((item) => (

              <Grid square='true' key={item.id} item xs={6} md={4} className={styles.oneItem}>
                <div className={styles.paper}>
                  <img src={item.url} className={styles.images}>

                  </img>
                  <div className={styles.productInfo}>
                    [{item.id}] {item.title}
                  </div>
                  <div className={styles.buttons}>
                    <div className={styles.buttonsLeft}>
                      {item.albumId}
                    </div>
                    <div className={styles.buttonsRight}>
                      <AddShoppingCartIcon fontSize='small' />
                    </div>
                  </div>
                </div>
              </Grid>

            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}
