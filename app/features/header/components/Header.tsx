import { Link } from 'remix'

export const Header = () => {
  return (
    <header className="bg-emerald-400 py-2">
      <h1 className="text-center text-4xl font-bold"><Link to="/">Toolzy</Link></h1>
    </header>
  )
}
