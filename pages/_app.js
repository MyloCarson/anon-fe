import '../assets/main.css'
import '../assets/scss/styles.scss'
import { Provider } from 'react-redux'
import store from '../store'
import config from 'react-reveal/globals'

config({ ssrFadeout: true })

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />

    </Provider>
  )
}
