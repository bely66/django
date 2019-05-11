import React, {Component} from 'react'; 
import CardList from './cardlists';
import {robots} from './robots';
import Search from './Search';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : robots , 
            searchfield : ''
        }
        
    }
    onSearchChange = (event) => {
        
        this.setState({searchfield : event.target.value})
       
        
    }
    
    render(){
      const Filtered = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            
        })  
    
    return (
    <div className='tc'>
    <h1 className="shadow 4 pa3 br4">Robo Friends </h1>
        <Search change={this.onSearchChange}/>
     <CardList robots = {Filtered} />
    </div>
    );
    
    }
}
export default App ;