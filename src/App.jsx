import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Feature from './components/Feature/Feature';
import Membership from './components/Membership/Membership';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <Feature />
      <Membership />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
