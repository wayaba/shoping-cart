import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products({ products }) {
  const { addToCart, checkCartHasItem, removeFromCart } = useCart()

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const itemAlreadyInCart = checkCartHasItem(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title}></img>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: itemAlreadyInCart ? 'red' : 'blue',
                  }}
                  onClick={() =>
                    itemAlreadyInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {itemAlreadyInCart ? (
                    <RemoveFromCartIcon />
                  ) : (
                    <AddToCartIcon />
                  )}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
