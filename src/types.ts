import React from 'react'

export type Country = {
  name: Record<'common', string>
  capital: [string]
  population: number
  flags: Record<'alt' | 'png' | 'svg', string>
  ccn3: string
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export type CardProps = React.HTMLAttributes<HTMLDivElement> & Country
