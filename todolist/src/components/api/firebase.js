import App from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"



    Login(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
    }
    async Register(pseudo,email,password){
        await this.auth.createUserWithEmailAndPassword(email,password)
        return this.auth.currentUser.updateProfile({
            displayName: pseudo
        })
    }
    AddTodoInDb(section,todo){
        if(!this.auth.currentUser){
            return alert('No user')
        }
        return this.db.collection(todo).doc(section).set(todo)
    }
    isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}
    getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
    }
   


