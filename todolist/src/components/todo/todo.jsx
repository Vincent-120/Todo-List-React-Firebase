import React,{useState, useEffect} from 'react'
import * as firebase from "firebase/app"
import 'firebase/firestore'

export default function Todo(){
    let db = firebase.firestore()
    const [todos,setTodos]=useState(["todolist"])
    useEffect(() => {
        console.log('EFFECT')
        const changeState = []
        db.collection('todo').doc('userid').get().then((doc )=>{ 
                const elm = doc.data()
                if (elm.priver) {
                    for (let i = 0; i < elm.priver.length; i++) {
                        const element = elm.priver[i];
                        console.log(element)
                        changeState.push(element)
                    }
                setTodos(changeState)
                }
                else{
                    return
                }
        })
    }, [])
    return (
        <div style={Style.containeur}>
            <h1 style={{textAlign:"center"}}>teste</h1>
            {todos.map((index,text)=>{
                return (
                    <div style={Style.box}>
                        <li style={Style.list} key={text}>
                            <div>
                                {index}
                            </div>
                        </li>
                    </div>
                    )
            })}
        </div>
    )
}  
const Style ={
    containeur:{
        display:"flex",
        alignText:'center',
        justifyContent:"center",
        flexFlow:"column",
        alignSelf:'center'
    },
    box:{
        alignSelf:'center'
        
    },
    list:{listStyle:'none'}
}