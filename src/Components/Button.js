import React from "react";
import classnames from "classnames";

// const finalclassName = classnames('mx-1.5','px-3 ','py-1.5',{
//   "bg-blue-500": true,
//   "text-yellow-500": false,
// });

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classnames("flex item-center  mx-1.5 px-3 py-1.5 border", {
    "border-blue-600 bg-blue-500 text-white hover:bg-sky-700": primary,
    "border-green-600 bg-green-500 text-white hover:bg-green-700": success,
    "border-yellow-600 bg-yellow-500 text-white hover:bg-yellow-700": warning,
    "border-grey-600 bg-grey-500 text-black hover:bg-grey-700": secondary,
    "border-red-600 bg-red-500 text-white hover:bg-red-700": danger,
    "rounded-md": rounded,
    "outline bg-white text-black border-white-600": outline,
  });
  return (
    <div>
      <button className={classes} {...rest}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error("invalid not more then one color");
    }
    //
  },
};

//Button;
