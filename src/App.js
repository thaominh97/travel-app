import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterNav from './components/Header/viewsHeader/RouterNav';
import Header from './components/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollTop/ScrollButton';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RouterNav/>
        <Container />
        <ScrollButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
