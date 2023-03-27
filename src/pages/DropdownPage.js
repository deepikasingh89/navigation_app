import React, { useState } from 'react'
import DropDown from '../Components/DropDown';

export default function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
  ];
  return (
    <div>
      {/* <ButtonPage />
      <AccordionPage /> */}
      <DropDown
        options={options}
        onSelect={handleSelect}
        selection={selection}
      />
    </div>
  );
}
