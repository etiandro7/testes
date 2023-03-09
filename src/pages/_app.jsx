import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
//import {ProvinderContext} from '../components/Contexto/UsuarioContext'
import {AuteticadoProvidor} from '../components/Context/'
import Forcar from '../components/Context/Forcar'
//<ProvinderContext> </ProvinderContext>

function MyApp({ Component, pageProps }) {
  return(

    <AuteticadoProvidor>
       
        <Component {...pageProps} />
       
      </AuteticadoProvidor>
    
  ) 
  
}
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
export default MyApp
