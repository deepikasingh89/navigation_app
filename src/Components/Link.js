import classNames from "classnames";
import React from "react";
import useCustomhook from "../context/useCustomhook";

export default function Link({ to, children, className, activeClassname }) {
  const { navigate, currentPath } = useCustomhook();
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassname
  );
  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <div>
      <a className={classes} onClick={handleClick} href={to}>
        {children}
      </a>
    </div>
  );
}
