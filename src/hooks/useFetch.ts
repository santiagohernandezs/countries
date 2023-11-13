import { getAllCountries } from '@/services'
import { Country } from '@/types'
import { useEffect, useMemo, useState } from 'react'

export const useFetch = () => {
  const [search, setSearch] = useState<string>('')
  const [countries, setCountries] = useState<Country[]>([])

  const filterByName = (country: Country) => country.name.common.toLowerCase().startsWith(search.toLowerCase())

  const filteredCountries = useMemo(() => countries.filter(country => filterByName(country)), [countries, search])

  useEffect(() => {
    getAllCountries().then(countries => {
      setCountries(countries)
    })
  }, [])

  return { countries, filteredCountries, setSearch }
}
