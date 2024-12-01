import { CurrencieShema, CryptoSchema, PairSchema, CryptoPriceSchema } from "../schemas/Crypto-schemas"
import { z } from 'zod'

export type Currency = z.infer<typeof CurrencieShema>
export type CryptoCurrency = z.infer<typeof CryptoSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
