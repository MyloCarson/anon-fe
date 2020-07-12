import 'react-toastify/dist/ReactToastify.css'
import '../assets/main.css'
import '../assets/scss/styles.scss'
import { Provider } from 'react-redux'
import store from '../store'
import config from 'react-reveal/globals'
import { ToastContainer } from 'react-toastify'

config({ ssrFadeout: true })

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  )
}
