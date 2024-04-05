import Link from 'next/link'
const Logo = () => {
  return (
    <Link href={"/"} className="bg-orange-700 px-2 py-1 rounded-lg text-lg md:text-2xl cursor-pointer">Emre.<span className="text-sm">Commerce</span></Link>
  )
}

export default Logo