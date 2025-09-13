import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { UserContextProvider } from './context/UserContext.jsx';
import './index.css'
import Records from "./Sections/Record.jsx";
import App from './HomePage.jsx'
import YogaGame from './Components/YogaStressReliefGame.jsx'; 
import HomePage from './HomePage.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/records" element={<Records />} />
        <Route path="/meditation" element={<YogaGame />} />
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
)
