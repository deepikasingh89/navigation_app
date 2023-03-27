import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

export default function DropDown({ options, onSelect, selection }) {
  const [isOpen, setisOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setisOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setisOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setisOpen(false);
    onSelect(option);
    console.log(option);
  };
  const renderItem = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <div
        className="flex jutify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {selection?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border p-3 shadow bg-white w-full">
          {renderItem}
        </div>
      )}
      {/* <select></select> */}
    </div>
  );
}
