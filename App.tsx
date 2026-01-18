import React, { useState, useEffect } from 'react';
// import { VistraLanding } from './components/VistraLanding';
import { VistraConcierge } from './components/VistraConcierge';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* <VistraLanding /> */}
      <VistraConcierge />
    </div>
  );
};

export default App;