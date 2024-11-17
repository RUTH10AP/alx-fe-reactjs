import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Counter from '../../alx-react-app-new/ALX-react-app-new/src/components/Counter';

function App() {
  return (
    <div>
    <Counter/>
      <Counter/>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;
