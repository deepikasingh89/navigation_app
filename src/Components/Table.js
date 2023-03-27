import React from 'react'

export default function Table({ data, config, keyFN }) {
  const renderHeader = config.map((col) => {
    return <th key={col.label}>{col.label}</th>;
  });
  const trRows = data.map((rowData) => {
    const renderCells = config.map((cols) => {
      return (
        <td className="p-3" key={cols.label}>
          {cols.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={keyFN(rowData)} className="border-b">
        {renderCells}
        {/* <td className="p-3">{fruit.name}</td>
        <td className="p-3">
          <div className={`p-3 m-3 ${fruit.color}`}></div>
        </td>
        <td className="p-3">{fruit.score}</td> */}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeader}</tr>
      </thead>
      <tbody>{trRows}</tbody>
    </table>
  );
}
