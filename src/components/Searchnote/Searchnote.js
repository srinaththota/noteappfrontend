import React,{Component} from 'react';
import { connect } from 'react-redux';
import Editdata from '../Displaycategory/Editdata';
//import classes from '../Searchnote/Searchnote.css';
class Searchnote extends Component{
state={
    smessage:''
}
    render(){
        let output=null;
        if(this.props.arr){
    output=this.props.arr.map(message=>{
        if(message.message===this.state.smessage){
            return <Editdata 
             
            key={message.userId} message={message.message} category={message.category} 
            />
        }
        else{
           return null
        }
    })
}
        return(
            <div>
                <h3>Enter the text to search</h3>
                <textarea placeholder="Search.." 
                onChange={event=>this.setState({smessage:event.target.value})}/>
                <div>
  <button type="submit">Click</button>
  </div>{output}
  
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        arr:state.fetchedData
    };
}

export default connect(mapStateToProps)(Searchnote);