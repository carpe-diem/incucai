import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Router } from './route/Router'

function App() {
  return (
    <div className="App">
      <Header />
      <Router/>
      <Footer />
    </div>
  );
}

export default App;
