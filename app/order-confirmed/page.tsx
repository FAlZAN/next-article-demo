import React from "react";
import Image from "next/image";
import check from "../../public/check.svg";
import ContinueShoppingButton from "@/components/continue_shopping_button/ContinueShoppingButton";

const page = () => {
  return (
    <section className="h-[60vh]  flex-row-center">
      <div className="flex-col-center gap-4">
        <Image src={check} alt="check icon" />
        <p className="font-semibold">Order Confirmed</p>
        <ContinueShoppingButton />
      </div>
    </section>
  );
};

export default page;
