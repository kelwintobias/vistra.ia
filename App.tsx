import React, { useState, useEffect } from 'react';
import { VistraLanding } from './components/VistraLanding';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <VistraLanding />
    </div>
  );
};

export default App;