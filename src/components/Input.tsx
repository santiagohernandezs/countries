import { InputProps } from '@/types'
import { cx } from '@/utils/cx'

export const Input: React.FC<InputProps> = ({ placeholder, onChange, ...className }): JSX.Element => {
  const styles = {
    input: cx(
      'w-64 h-8 p-2',
      'bg-gray-100 border border-gray-300 rounded-md',
      'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent',
      'transition duration-200 ease-in-out',
      { ...className }
    )
  }

  return <input className={styles.input} placeholder={placeholder} onChange={onChange} role='searchbox' type='search' {...className} accessKey='s' />
}
