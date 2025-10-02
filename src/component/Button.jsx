import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const Button = ({
  to,
  onClick,
  children,
  className,
  type,
  style = "primary",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center max-md:py-4 max-md:px-6 max-md:text-xl max-sm:px-4 max-sm:text-base py-2 px-4 transition duration-300 font-semibold";

  const modStyles = {
    primary:
      "bg-primary-gold text-white hover:text-primary-gold hover:bg-white rounded",
    secondary:
      "bg-transparent text-primary-gold font-medium border-2 border-primary-gold",
    tertiary: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
  };

  const styles = cn(baseStyles, modStyles[style], className);

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
