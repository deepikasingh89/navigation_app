import React from "react";
import Table from "../Components/Table";

export default function TablePage() {
  const data = [
    {
      name: "orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 3,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
    },
  ];
  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ];

  const keyFN = (fruit)=>{
    return fruit.name;
  }
  return (
    <div>
      <Table data={data} config={config} keyFN ={keyFN}/>
    </div>
  );
}
