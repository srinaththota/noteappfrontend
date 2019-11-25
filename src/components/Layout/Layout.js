import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import classes from '../Layout/Layout.css';


import NoteBox from '../NoteBox/NoteBox';
import Displaynote from '../Displaynote/Displaynote';
import Searchnote from '../Searchnote/Searchnote';
import DisplayCategory from '../Displaycategory/Displaycategory';

//import Fetchdata from '../Fetchdata/Fetchdata';
//import Notelist from '../Notelist/Notelist';
class Layout extends Component{
    render(){
        return(
            
            <div>
            <div className={classes.header}>
                NoteApp
            </div>
            <div className={classes.container}>
            
            <div className={classes.column1}>
            <div>
                <NoteBox/>
                </div>
                <hr/>
                <div>
                    <Searchnote/>
                </div>
                
                
            </div>
            <BrowserRouter>
            <div className={classes.column2}>
            
            <DisplayCategory></DisplayCategory>
            <Displaynote/>
            </div>
            </BrowserRouter>
            </div>
           
            <div className={classes.footer}>
                footer
            </div>
            </div>
            
        );
    }
}
export default Layout;