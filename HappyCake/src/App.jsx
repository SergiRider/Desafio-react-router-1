import './App.css'
import Navigation from './Components/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './view/Contact';
import NotFound from './view/NotFound';

function App() {

  return (
    <>
<Navigation/>
<Routes>
  <Route path='/'
  element={<Home/>}>
  </Route>
  <Route path='/contact'
  element={<Contacts/>}>
  </Route>
  <Route path='*'
  element={<NotFound/>}>
  </Route>
</Routes>
    </>
  )
}

export default App
