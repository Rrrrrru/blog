import { useLocation } from "react-router";
import Header from "../../components/header/Header.jsx"
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts"
import React from 'react'
import "./homepage.css";


export default function Homepage() {
    const location = useLocation();
    console.log("homepage location:"+location);
  return (
    <>
    <Header></Header>
    <div className="home">
      <Posts></Posts>
      <Sidebar></Sidebar>
    </div>
    </>
    
  )
}
