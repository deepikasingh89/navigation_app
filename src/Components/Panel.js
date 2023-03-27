import React from "react";
import classNames from "classnames";

export default function Panel({ chidren, className, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {chidren}
    </div>
  );
}
