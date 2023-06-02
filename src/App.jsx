import { Route, Routes } from 'react-router-dom';
import Portifolio from './pages/Portifolio'
import NotFound from './pages/NotFound'
import Feedback from './pages/Feedback'


function App() {

  return (
    <Routes>
      <Route exact path="/portifolio" Component={Portifolio}/>      
      <Route exact path="/feedback" Component={Feedback}/>      
      <Route path="*" Component={NotFound}/>      
    </Routes>
  )
}

export default App
