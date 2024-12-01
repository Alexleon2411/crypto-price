import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"



function App() {
  const fetchCrypto = useCryptoStore((state) => state.fetchCrypto)
  useEffect(() => {
    fetchCrypto()
  }, [])

  return (
    <>
      <div className="container">
        <h2 className="app-title">Cotizador de <span>Criptomonedas</span></h2>
        <div className="content">
          <CriptoSearchForm/>
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
