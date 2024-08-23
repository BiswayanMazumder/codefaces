import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Landingpage from './Landing Page/landingpage';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
