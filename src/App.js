import './App.scss'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'


function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts/>}/>
      </Route>
    </Routes>
  </>)
}

export default App
