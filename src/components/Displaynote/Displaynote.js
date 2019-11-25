import React,{Component} from 'react';

//import Messages from '../Messages/Messages';
import Fetchdata from '../Fetchdata/Fetchdata';

class Displaynote extends Component{

    render(){
        return(
            <div>
                Displaynote
                <Fetchdata/>
            </div>
        );
    }
}

export default Displaynote;