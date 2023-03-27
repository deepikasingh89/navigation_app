import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextindex) => {
    if (expandedIndex === nextindex) setExpandedIndex(-1);
    else setExpandedIndex(nextindex);
  };
  const renderitems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text=2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        {/* <div onClick={() => setExpandedIndex(index)}>{item.label}</div>  or */}
        <div
          className="flex justify-between p-3 bg-gray border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderitems}</div>;
}
