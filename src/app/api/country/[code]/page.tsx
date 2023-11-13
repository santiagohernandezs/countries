import { getCountry } from '@/services'

export default async function Country({ params }: { params: any }) {
  const { code } = params
  const data = await getCountry(code)

  return <div>Country</div>
}
