import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className="footer">
      <h4>
        Pablo Pedraza 🇦🇷 - <span> @pablojpedraza </span>
      </h4>

      <h5>{JSON.stringify(filters, null, 2)}</h5>
      <h5>{JSON.stringify(cart, null, 2)}</h5>
    </footer>
  )
}
