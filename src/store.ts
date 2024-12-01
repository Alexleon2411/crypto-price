import { create } from "zustand";
import type  { CryptoCurrency, CryptoPrice, Pair } from "./types"
import { devtools } from "zustand/middleware";
import { getCryptoPrice, getCryptos } from "./services/CryptoServices";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[],
  result: CryptoPrice,
  loading: boolean,
  fetchCrypto: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  result: {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: ''
  },
  loading: false,
  fetchCrypto: async () => {
    const cryptocurrencies = await getCryptos()
    set((state) => ({
      ...state,
      cryptocurrencies
    }))
  },
  fetchData: async (pair) => {
    set((state) => ({
      ...state,
      loading: true
    }))

    const result = await getCryptoPrice(pair)
    set((state) => ({
      ...state,
      result,
      loading: false
    }))

  }
})))
