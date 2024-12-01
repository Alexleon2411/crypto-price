import { currencies } from "../data/currencies";
import { useCryptoStore } from "../store";
import { useState } from "react";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
  const store = useCryptoStore()

  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: ""
  })

  const [error, setError] = useState('');
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)


  const handleSubmit = async(e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(Object.values(pair).includes('')) {
      setError("Debes Seleccionar una moneda y una CriptoMoneda");
      return;
    }
    try {
      const data = await store.fetchData(pair)
      return data
    } catch (error) {
      console.log("An error happend")
    }

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      setPair({
        ...pair,
        [e.target.name]: e.target.value
      })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda: </label>
        <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
          <option value="">---Selecciona la moneda de tu país---</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Moneda: </label>
        <select name="criptocurrency" id="criptocurrency" className="cryptop-select" onChange={handleChange} value={pair.criptocurrency}>
          <option value="">---Selecciona la Cripto moneda---</option>
          {cryptocurrencies.map(crypto => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>
      <input type="submit" />
    </form>
  )
}
