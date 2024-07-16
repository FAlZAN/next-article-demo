import { IProductBag } from "@/types/IProductBag";
import Image from "next/image";
import minus from "../../public/minus.svg";
import plus from "../../public/plus.svg";
import useCart from "@/store/store";

interface IProductQuantity {
  product: IProductBag;
}

const ProductQuantity = ({ product }: IProductQuantity) => {
  const updateQuantity = useCart((state) => state.updateQuantity);
  const removeFromBag = useCart((state) => state.removeFromBag);
  const decreaseQuantity = product.quantity - 1;
  const increaseQuantity = product.quantity + 1;

  const handleDecreaseQuantityClick = () => {
    product.quantity > 1
      ? updateQuantity(product.id, product.selectedSize, decreaseQuantity)
      : removeFromBag(product.id, product.selectedSize);
  };

  const handleIncreaseQuantityClick = () => {
    product.quantity >= 10
      ? alert("maximum 10 quantity can be added.")
      : updateQuantity(product.id, product.selectedSize, increaseQuantity);
  };

  return (
    <div className="product_quantity">
      <button
        className="product_quantity_button"
        onClick={handleDecreaseQuantityClick}
      >
        <Image src={minus} alt="minus icon" />
      </button>
      <div className="product_quantity_count">{product.quantity}</div>
      <button
        className="product_quantity_button"
        onClick={handleIncreaseQuantityClick}
      >
        <Image src={plus} alt="plus icon" />
      </button>
    </div>
  );
};

export default ProductQuantity;
