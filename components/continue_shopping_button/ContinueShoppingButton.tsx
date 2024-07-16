import React from "react";
import Link from "next/link";
import SecondaryButton from "../secondary_button/SecondaryButton";
import Image from "next/image";
import back from "../../public/arrow-left.svg";

const ContinueShoppingButton = () => {
  return (
    <Link href="/">
      <SecondaryButton className="empty_bag_link">
        <span className="pt-[2px]">
          <Image src={back} alt="left arrow icon" />
        </span>
        continue shopping
      </SecondaryButton>
    </Link>
  );
};

export default ContinueShoppingButton;
