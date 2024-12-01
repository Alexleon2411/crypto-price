import axios from "axios"
import { CryptoPriceSchema, CryptosSchema } from "../schemas/Crypto-schemas"
import { Pair } from "../types"

//esta es la funcion encargada de hacer el llamado a la api
export async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD'
  const {data: {Data}} = await axios(url)
  const result = CryptosSchema.safeParse(Data)
  if (result.success) {
    return result.data
  }
}

export async function getCryptoPrice(pair : Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
  const {data: { DISPLAY } } = await axios(url)
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
  if (result.success){
    return result.data
  }
}
// https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR
