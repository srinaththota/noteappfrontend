import React,{Component} from 'react';
import  '../NoteBox/NoteBox.css';

import axios from 'axios';

class NoteBox extends Component{
    state={
        message:{
        note:'',
        category:'CAT1'
    },
        validate:true
    }

   
    storeMessage=()=>{
        console.log("clicked");
        if(this.state.note!==''){
            
            this.setState({
                ...this.state.message,
                validate:false
            });
            
        }
        console.log(this.state.username);

    }

    postHandler=()=>{
        
        axios.post('http://3.8.210.185:8080/message',{message:this.state.note,category:this.state.category})
        .then(response=>{
            this.setState({
                ...this.state,
                note:response.data.message,
                category:response.data.category,
            });
        });
        
    }

    render(){
        return(
            <div>
                <h3>Please add note in below box</h3>
                <textarea placeholder="Please enter your note"
                onChange={event=>this.setState({note:event.target.value})}/>
                <div>
                <input type="text" value={this.state.value}
                 onChange={event=>this.setState({category:event.target.value})}>
                  
                </input>
                </div>
                <div>
                
                </div>
                
                <button type="submit" value="Submit" onClick={this.postHandler}>Submit</button>
                          
            </div>
        );
    }
}

export default NoteBox;