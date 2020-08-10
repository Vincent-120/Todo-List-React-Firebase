import React,{useEffect,useState} from 'react';
import * as firebase from "firebase/app"
import Todo from './components/todo/todo'
import AddTodo from './components/todo/addTodo'

const firebaseConfig = {
  apiKey: "AIzaSyD8pA_LPX4SxNvVtCaZ9yYgtJJUxlaooUc",
    authDomain: "listtodo-49a91.firebaseapp.com",
    databaseURL: "https://listtodo-49a91.firebaseio.com",
    projectId: "listtodo-49a91",
    storageBucket: "listtodo-49a91.appspot.com",
    messagingSenderId: "546526734643",
    appId: "1:546526734643:web:0dd224c42c1db266b3f646",
    measurementId: "G-PPSL06332Z"
};
function App() {
  const [intialize,setInitialize]=useState(false)
  useEffect(()=>{
    try {
      let fireBase = firebase.initializeApp(firebaseConfig)
      if(fireBase){
        setInitialize(true)
      }
    } catch (error) {
      console.log(error.message)
    }
  },[])
  
  
  if (intialize === true) {
    return(
      <div>
        <AddTodo/>
        <Todo/>
      </div>
    )
  }
  return (
    <div>
      <h1>Vous avez besoin d'etre connecter a la base de donnée !</h1>
    </div>
  );
}

export default App;
