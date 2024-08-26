import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Landingpage from './Landing Page/landingpage';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Jordan from './Shoes Categories/jordan';
import Slides from './Shoes Categories/slides';
import Dunks from './Shoes Categories/dunks';
import AirMax from './Shoes Categories/airmax';
import AF1 from './Shoes Categories/AF1';
import Footwear from './Shoes Categories/footwear';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
      <Routes>
        <Route path="/jordan" element={<Jordan />} />
      </Routes>
      <Routes>
        <Route path="/slides" element={<Slides />} />
      </Routes>
      <Routes>
        <Route path="/dunks" element={<Dunks />} />
      </Routes>
      <Routes>
        <Route path="/airmax" element={<AirMax />} />
      </Routes>
      <Routes>
        <Route path="/AF1" element={<AF1 />} />
      </Routes>
      <Routes>
        <Route path="/footwear" element={<Footwear />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
