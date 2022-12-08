import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
     <Welcome name="vinoth" pic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"/>
     <Welcome name="vicky" pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"/>
     <Welcome name="ganesh"pic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
     
      
    </div>
  );
}
function Counter(){
  const [like,setlike] = useState(0);
  const [dislike,setdislike] = useState(0);
  return(
    <div>
      <button onClick={()=>setlike(like+1)}>👍 {like}</button>
      <button onClick={()=>setdislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}
function Welcome(props) {
  //const name = "vinoth";
  return(
     <div>
      <img className="profile-pic"
           src={props.pic}/> 
      <h1>Hi {props.name}</h1>
      <Counter/>
</div>
);
}

export default App;
