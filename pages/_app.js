//@Componets
import AppFrame from "components/shared/AppFrame/index.js"

//@Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/helpers/globals.css'
import 'assets/styles/index.module.scss';


function MyApp({ Component, pageProps }) {
  return (
    <AppFrame>
      <Component {...pageProps} />
    </AppFrame>
  )
}

export default MyApp
