import { useState } from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);
  const increasedCount = () => setCount(count + 1);

  return (
    <>
      <Header count={count}></Header>
      <main className="main">
        <Products increasedCount={increasedCount}></Products>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
