import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Home from '../../my-company/Home';
import About from '../../my-company/About';
import Services from '../../my-company/Services';
import Contact from '../../my-company/Contact';
import Navbar from '../../my-company/Navbar';

function App() {
  return (
    <div>
      <Router>
  <Navbar />
  {/* Other routes */}
</Router>

      <Home/>
      <About/>
      <Services/>
      <Contact/>
      
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;
