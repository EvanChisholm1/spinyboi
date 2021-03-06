import React, { useState } from 'react';
import './App.css';

function SpinnyBoi({ items }) {
  const [offset, setOffset] = useState(0);

  function getNewOffset() {
    let newOffset = Math.round(Math.random() * items.length);
    if (newOffset === offset) newOffset = getNewOffset();
    return newOffset;
  }

  function handleSpin() {
    const newOffset = getNewOffset;
    setOffset(newOffset);
  }

  return (
    <div className="spinnyboi">
      {items.map((item, i) => (
        <div
          key={item}
          className="item"
          style={{
            rotate: `${(360 / items.length) * (i + offset)}deg`,
          }}
        >
          {item}
        </div>
      ))}
      <button className="spin-button" onClick={handleSpin}>
        Spin
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <SpinnyBoi
        items={[
          'tennis',
          'soccer',
          'basketball',
          'hoppscotch',
          'jumprope',
          'hoolahoop',
        ]}
      />
    </div>
  );
}

export default App;
