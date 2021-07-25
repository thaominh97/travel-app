import './App.css';
import Header from './components/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollTop/ScrollButton';
function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <ScrollButton/>
      <Footer/>      
    </div>
  );
}

export default App;
