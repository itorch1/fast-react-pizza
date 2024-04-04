import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";

function RemoveItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default RemoveItem;
