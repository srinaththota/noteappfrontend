import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';

import ComputerScience from '../Displaycategory/ComputerScience/ComputerScience';
import Maths from '../Displaycategory/Maths/Maths';
import History from '../Displaycategory/History/History';
import classes from './DisplayCategories.css';
class DisplayCategory extends Component{
    render(){
        return(
            
            <div>
                <ul className={classes.ulstyle}>
                   <li className={classes.listyle}><Link className={classes.linkstyle} to="/cs">Computer Science</Link></li>
                   <li className={classes.listyle}><Link className={classes.linkstyle} to="/maths">Maths</Link></li>
                   <li className={classes.listyle}><Link className={classes.linkstyle} to="/his">History</Link></li>
                    </ul>
                <div className={classes.displaycontent} >
            <Route path="/cs"  exact component={ComputerScience}/>
            <Route path="/maths"  exact component={Maths}/>
            <Route path="/his"  exact component={History}/>
             </div>
                        </div>
            
        );
    }
}
export default DisplayCategory;