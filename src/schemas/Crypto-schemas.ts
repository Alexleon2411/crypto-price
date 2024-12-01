import { z } from 'zod'


export const CurrencieShema = z.object({
  code: z.string(),
  name: z.string()
})


export const CryptoSchema =
  z.object({
    CoinInfo: z.object({
      // ImageUrl: z.string(),
      FullName: z.string(),
      Name: z.string(),

    })
  })


  export const CryptosSchema = z.array(CryptoSchema)

  export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
  })


  export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
  })
