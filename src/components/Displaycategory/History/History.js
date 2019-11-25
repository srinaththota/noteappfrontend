import React,{Component} from 'react';
import {connect} from 'react-redux';

import Messages from '../../Messages/Messages';
class History extends Component{
    state={
        messagesLoaded:null
    }
    render(){
    if(this.props.arr){
        const messages=this.props.arr.map(message=>{
            
            if(message.category==='History'){
            return <Messages key={message.userId} message={message.message} category={message.category}/>
        }else{
            return null
        }
        });
        this.state.messagesLoaded=messages;
    }
        return(
            <div>{this.state.messagesLoaded}</div>
        );
    }
}


const mapStateToProps = state =>{
    return{
        arr:state.fetchedData
    };
}

export default connect(mapStateToProps)(History);