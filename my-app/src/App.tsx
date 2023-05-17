import logo from './logo.svg';
import Button from '@trimbleinc/modus-react-bootstrap/esm/Button';
import { useState } from 'react';
import Toast from '@trimbleinc/modus-react-bootstrap/esm/Toast'

function App() {
  const [showBadge, setShowBadge] = useState(false);

  function appToast() {
    if (showBadge) {
      return (
        <Toast className='toast-success' delay={5000}>Toasty
          <Button color="secondary" onClick={() => setShowBadge(false)}>hide</Button>
        </Toast>
      );
    }
    return null
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button size="lg" onClick={() => setShowBadge(true)}>This is a Modus button</Button>
        {appToast()}
      </header>
    </div>
  );
}

export default App;
