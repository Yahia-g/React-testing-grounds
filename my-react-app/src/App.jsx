import { useState } from 'react'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



function RecordComment({e, setinput}) {
  
  return (
    <div>
      <input onChange={(e) => setinput(e.target.value)} />

    </div>


  )
}

function HandleSubmit({e, input, comments, setComments}) {
  return (
      <div>
        <button onClick={(e) => setComments([...comments, input])}>comment</button>

      </div>


    
  )
}

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li>{comment}</li>
      ))}
    </ul>
  );
}


function App() {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([])

  return (
    <>
      <RecordComment input={input} setinput={setInput} />
      <HandleSubmit input={input} comments={comments} setComments={setComments} />
      <CommentList comments={comments} />
    </>
  )
}

export default App
