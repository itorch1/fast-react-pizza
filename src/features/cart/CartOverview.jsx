import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNumPizzas, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const numPizzas = useSelector(getNumPizzas);
  const totalPrice = useSelector(getTotalPrice);

  if (!numPizzas) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{numPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
