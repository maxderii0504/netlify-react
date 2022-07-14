import React from 'react';
import '../App.css';

export function PostCard(props) {

    
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div>
        <p>
          {props.body}
        </p>
        ertert
      </div>
    </div>
  );
}

export default PostCard;