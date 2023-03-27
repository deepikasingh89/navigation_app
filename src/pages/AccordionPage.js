import React from 'react'
import Accordion from '../Components/Accordion';

export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "can i use react on a proj",
      content:
        "you can use react on any project you can use react on any project you can use react on any projectyou can use react on any projectyou can use react on any projectyou can use react on any project",
    },
    {
      id: 2,
      label: "can i use react on a proj",
      content:
        "you can use react on any project you can use react on any project you can use react on any projectyou can use react on any projectyou can use react on any projectyou can use react on any project",
    },
    {
      id: 3,
      label: "can i use react on a proj",
      content:
        "you can use react on any project you can use react on any project you can use react on any projectyou can use react on any projectyou can use react on any projectyou can use react on any project",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
