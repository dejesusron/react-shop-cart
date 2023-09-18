import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ShopContextProvider from './context/ShopContext';

const App = () => {

  return (
    <div>
      <ShopContextProvider>
        <Router> 
          <Routes>

            <Route element={<RootLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Route>

            <Route path='/*' element={<NotFound />} />

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App