import React, { useState } from 'react';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
            Flight Schedule
          </BpkText>
        </div>
      </header>

      <main className={getClassName('App__main')}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <BpkText tagName="p">
            Please select your preferred travel date:
          </BpkText>
          
      
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{
              marginTop: '15px',
              padding: '12px',
              borderRadius: '4px',
              border: '2px solid #00718b', 
              fontSize: '16px',
              fontFamily: 'sans-serif',
              width: '100%',
              maxWidth: '300px'
            }}
          />
          
          {selectedDate && (
            <BpkText tagName="p" style={{ marginTop: '10px', color: '#00718b' }}>
              Selected: <strong>{selectedDate}</strong>
            </BpkText>
          )}
        </div>

        <BpkButton onClick={() => alert(`Date confirmed: ${selectedDate}`)}>
          Continue
        </BpkButton>
      </main>
    </div>
  );
};

export default App;