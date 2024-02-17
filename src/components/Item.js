import "./Item.css";
export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">ชื่อสินค้า : {name}</p>
        <p className="price">ราคา : {price} บาท</p>
      </div>
      <div className="quantity">
        <button>+</button>
        <input type="text" value={quantity} disabled />
        <button>-</button>
      </div>
      <div className="total-price">{quantity * price}</div>
      <button>ลบสินค้า</button>
    </div>
  );
}
