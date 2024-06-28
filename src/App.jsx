import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Main from "./pages/Main.jsx";
import FriendMain from "./pages/FriendMain.jsx";
import Todo from "./pages/Todo.jsx";
import Search from "./pages/Search.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/search" element={<Search />}></Route>
          {/*<Route path="/product/*" element={<Product />}></Route>*/}
          {/*<Route path="*" element={<NotFound />}></Route>*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
