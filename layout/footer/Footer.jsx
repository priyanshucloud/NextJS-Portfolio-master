import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-2 dark:bg-black bg-[#ecf8f9] font-sans text-lg text-center">
      Priyanshu {currentYear}
    </div>
  );
};

export default Footer;
