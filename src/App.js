// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import InGame from "./pages/InGame";
import Lobby from "./pages/Lobby";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<InGame></InGame>}></Route> */}
        <Route path="/*" element={<Lobby></Lobby>}></Route>
      </Routes>
    </>
  );
}

export default App;
