import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from "../../components/singlePost/singlepost"
import "./postDetail.css"
export default function PostDetail() {
  return (
    <div className='postDetail'>
        <SinglePost></SinglePost>
        <Sidebar></Sidebar>
    </div>
  )
}
