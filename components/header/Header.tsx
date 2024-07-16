"use client";
import useCart from "@/store/store";
import { getItemsCountBag } from "@/utils/getItemsCountBag";
import Image from "next/image";
import Link from "next/link";
import bag from "../../public/bag.svg";

const Header = () => {
  const items = useCart((state) => state.items);
  let items_count = getItemsCountBag(items);

  return (
    <header>
      <nav className="header">
        <h1 className="logo">DeMo</h1>
        <div className="bag">
          <Link href="/bag">
            <Image src={bag} alt="shopping bag icon" />
            {!!items_count && <div className="counter">{items_count}</div>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
