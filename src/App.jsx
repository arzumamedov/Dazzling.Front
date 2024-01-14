import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainlayout from './layouts/Mainlayout'
import Detailpage from './pages/Detailpage'
import Homepage from './pages/Homepage'
import Addpage from './pages/Addpage'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Homepage />} />
            <Route path='/detail/:id' element={<Detailpage />} />
            <Route path='/add' element={<Addpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
