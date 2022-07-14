import React, { useState } from "react"
import PostCard from "./components/Card"

const ButtonClick = () => {
  const [posts, setPosts] = useState([])

  const fetchData = () => {
    fetch('https://frozen-river-19022.herokuapp.com/list')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Posts</button>
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
      
    </div>
  )
}

export default ButtonClick