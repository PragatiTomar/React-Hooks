import React, {useState, useEffect} from 'react';

function App() {
 const [resourceType, setResourceType] = useState('posts')
 const [items, setItems] =useState([])
 useEffect(()=>{
 console.log('resource changed')

 return () =>{
  console.log('return from resource change') //will be executed first
 }
 }, [resourceType])
return(
  <>
<div>
  <button onClick={() => setResourceType('posts')}>Posts</button>
  <button onClick={() => setResourceType('users')}>Users</button>
  <button onClick={() => setResourceType('comments')}>Comments</button>
</div>
<h1>{resourceType}</h1>

  </>
)
    
}

export default App;
