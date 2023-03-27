import React from 'react'
import Counter from '../Components/Counter';

export default function CounterPage() {
    let intialValue=10;
  return (
    <div>
      <Counter intialValue={intialValue} />
    </div>
  );
}
