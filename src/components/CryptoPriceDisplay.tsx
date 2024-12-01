import { useCryptoStore } from "../store"
import { useMemo } from "react"
import Spinner from "./Spinner/Spinner"

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result)
  const loading = useCryptoStore((state) => state.loading)
  const hasResult = useMemo(() => !Object.values(result).includes('') , [result])

  return (
    <div className="result-wrapper">
      { loading ? <Spinner/> : hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            {/* ya que en la crypto moneda no se encuentra toda la informacion de la url donde se encuentra la imagen entonce se le tiene que  anadir el principio de la url que es el de la api que estamos usando  */}
            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen de la criptomoneda " />
            <div>
              <p >El Precio de es de: <span>{result.PRICE}</span></p>
              <p >El Precio más alto del día: <span>{result.HIGHDAY}</span></p>
              <p >El Precio más bajo del día: <span>{result.LOWDAY}</span></p>
              <p >variacion de las ultimas 24hr: <span>{result.CHANGEPCT24HOUR}</span></p>
              <p >Ultima actualización: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
          <Spinner/>
        </>
      )}

    </div>
  )
}
