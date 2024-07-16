import React from "react";
import Image from "next/image";
import pc from "../../public/pc.svg";
import next from "../../public/next-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="flex items-center gap-1">
        Made with{" "}
        <span>
          <Image src={pc} alt="pc icon" />
        </span>{" "}
        using{" "}
        <span>
          <Image src={next} alt="next icon" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
