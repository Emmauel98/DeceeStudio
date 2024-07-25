import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing_Page/IndexPage/LandingPage';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' Component={LandingPage} />
    </Routes>
    </>
  )
}

export default App
