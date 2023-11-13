import { CardProps } from '@/types'
import { cx } from '@/utils/cx'
import Image from 'next/image'
import Link from 'next/link'

export const Card: React.FC<CardProps> = ({ name, capital, flags, population, ccn3 }): JSX.Element => {
  const styles = {
    card: cx('bg-gray-100 border border-gray-300 rounded-lg', 'cursor-pointer', 'p-4', 'relative flex flex-col gap-4'),
    img: cx('w-full max-h-44 bg-cover bg-center rounded-md'),
    h2: cx('text-xl font-semibold'),
    span: cx('block', 'text-md font-normal text-gray-600')
  }

  return (
    <Link href={`/api/country/${ccn3}`} className={styles.card}>
      <Image src={flags.svg} alt={`${name.common}'s flag`} className={styles.img} width={350} height={300} />
      <div>
        <h2 className={styles.h2}>{name.common}</h2>
        <span className={styles.span}>Capital: {capital}</span>
        <span className={styles.span}>Population: {population} people</span>
      </div>
    </Link>
  )
}
