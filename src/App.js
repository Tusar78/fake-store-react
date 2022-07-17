import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Products></Products>
      </main>
    </>
  );
}

export default App;
