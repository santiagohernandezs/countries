'use client'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { useFetch } from '@/hooks/useFetch'
import { cx } from '@/utils/cx'

export default function Home() {
  const { filteredCountries, setSearch } = useFetch()

  const styles = {
    main: cx('flex flex-col flex-grow items-center gap-8 w-4/5'),
    grid: cx('grid grid-cols-4 gap-4', 'h-auto w-full'),
    input: cx(
      'w-64 h-8 p-2',
      'bg-gray-100 border border-gray-300 rounded-md',
      'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent',
      'transition duration-200 ease-in-out'
    ),
    span: cx('block h-full', 'text-md font-normal text-gray-600')
  }

  const filterData = filteredCountries?.map(country => <Card key={`${country.name.common}-card`} {...country} />)

  return (
    <main className={styles.main}>
      <Input placeholder='Buscar país' onChange={e => setSearch(e.target.value)} />
      <div className={styles.grid}>{filterData?.length > 0 ? filterData : <span className={styles.span}>No hay resultados</span>}</div>
    </main>
  )
}
