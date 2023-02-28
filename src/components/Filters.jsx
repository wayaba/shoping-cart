import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }
  const handleChangeCategory = (event) => {
    setFilters((prevState) => {
      return { ...prevState, category: event.target.value }
    })
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          id={minPriceFilterId}
          type="range"
          min="0"
          max="2000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        ></input>
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          value={filters.category}
        >
          <option value="all">Todas</option>
          <option value="home-decoration">Decoraciones</option>
          <option value="groceries">Grocerias</option>
          <option value="skincare">Cuidado Piel</option>
        </select>
      </div>
    </section>
  )
}
