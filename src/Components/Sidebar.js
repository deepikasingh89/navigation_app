import React from "react";
import Link from "./Link";

export default function Sidebar() {
  const links = [
    { lable: "Dropdown", path: "/" },
    { lable: "Accordion", path: "/accordion" },
    { lable: "Buttons", path: "/buttons" },
    { lable: "Table", path: "/tables" },
    { lable: "Counter", path: "/counter" },
  ];

  const routes = links.map((link) => {
   return <Link key={link.lable} to={link.path} className="mb-3" activeClassname="font-bold border-l-4 border-blue-500 pl-2">
      {link.lable}
    </Link>;
  });
  return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">{routes}</div>;
}
