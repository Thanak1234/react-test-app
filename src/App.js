import logo from './logo.svg';
import './App.css';
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import React from "react";

function App() {
  return (
    <div>
     <CommentBox/>
     <CommentList/>
    </div>
  );
}

export default App;
