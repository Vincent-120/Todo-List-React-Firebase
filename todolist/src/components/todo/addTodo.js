import React,{useState, useEffect} from 'react'
import * as firebase from "firebase/app"
import 'firebase/firestore'

export default function AddTodo (){
    const [todo,setTodo]=useState('')
    const db = firebase.firestore().collection('todo').doc('userid')
    const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
    
    function handleSubmit(e){
        e.preventDefault()
        db.update({
            priver: arrayUnion(todo)
        }).then(setTodo(''))
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Add Todo
                <input type="text" name="todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                <input type="submit" name="add"/>
            </label>
        </form>
    )
}