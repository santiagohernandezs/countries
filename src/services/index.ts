import { Country } from '@/types'
import { raise } from '@/utils/errors'

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population')
    const data = await response.json()
    return data as Country[]
  } catch (error: unknown) {
    return raise((error as Error).message)
  }
}

export const getCountry = async (code: string): Promise<Country> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await response.json()
    return data as Country
  } catch (error: unknown) {
    return raise((error as Error).message)
  }
}
