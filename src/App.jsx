import { Route, Routes } from 'react-router-dom';
import Portifolio from './pages/Portifolio'
import NotFound from './pages/NotFound'
import Feedback from './pages/Feedback'


function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Portifolio/>}/>      
      <Route path="/feedback" element={<Feedback/>}/>      
      <Route path="*" element={<NotFound/>}/>      
    </Routes>
  )
}

export default App
