import '../styles/globals.css'
import {dataProvider} from '../context/dataContext'

function MyApp({ Component, pageProps }) {
  return (
    <dataProvider>
    <Component {...pageProps} />
    </dataProvider>
  )
}

export default MyApp
