import Navigation from 'components/ Navigation/Navigation';
import { useState } from 'react';
import LandingSection from 'sections/LandingSection';
import "styles/globals.scss";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <Navigation
        drawerOpen={drawerOpen}
        onToggleDrawer={() => setDrawerOpen((open) => !open)}
      />
      <LandingSection />
    </div>
  );
}

export default App;
