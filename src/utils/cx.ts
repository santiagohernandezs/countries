import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cx = (...styles: ClassValue[]) => twMerge(clsx(styles))
