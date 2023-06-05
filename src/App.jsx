

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Tweets from "./pages/Tweets/Tweets";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Home />}></Route>
      </Routes>
      </>
  );
}

export default App;