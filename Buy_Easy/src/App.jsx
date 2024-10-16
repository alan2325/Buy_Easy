import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Product from './Component/Product';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Product" element={<Product/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
