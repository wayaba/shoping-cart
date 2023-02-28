export function CartItem({ thumbnail, price, quantity, title, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title}></img>
      <div>
        <strong>{title}</strong>$ {price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
