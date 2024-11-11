import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import UserContext from '../alx-react-app copy/src/components/UserContext';

function App() {
  return (
    <div>
      <UserContext/>
      <Counter/>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;
