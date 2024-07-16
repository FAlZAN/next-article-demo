import ContinueShoppingButton from "../continue_shopping_button/ContinueShoppingButton";

const EmptyBag = () => {
  return (
    <div className="empty_bag">
      <h2 className="empty_bag_title">Bag is empty.</h2>

      <ContinueShoppingButton />
    </div>
  );
};

export default EmptyBag;
