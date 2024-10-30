import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './pages/Body'
import Navbar from './components/Navbar'
import store from './utils/store'
import WatchVideo from './pages/WatchVideo'
import SearchResults from './pages/SearchResults'

function App() {

  return (
    <div className='px-4'>
    <Provider store = {store}>
    <BrowserRouter>
     <Navbar />
    <Routes>
     <Route path="/" element={<Body />} />
     <Route path="/watch/:id" element ={<WatchVideo />} />
     <Route path ='/results' element ={<SearchResults/>} />
     </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  )
}

export default App
