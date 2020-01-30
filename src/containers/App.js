import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import  './App.css';
//import {robots} from '../robots'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
    constructor(){
    super()
    this.state={
    //robots: robots,
    robots:[],
    searchField:''
        }

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        
        .then(response=> response.json())
        .then(users=>this.setState({robots:users})) //updates the app state with the users returned from the server
        .catch(err => console.log(err));  
    }
  onSearchChange = (event)=>{
     this.setState({searchField: event.target.value});
    console.log({searchField: event.target.value});
  }
    render(){
        const {robots, searchField } = this.state;
        const filteredRobots =robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
    
        });
          console.log(filteredRobots);
        if (this.state.robots.length === 0){
            return <h1 className="tc">Loading....</h1>
        }else{
        return (
            <div className="tc">
            <h1 className='f1'>Robopals</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        );
        }
        }
   
}
export default App;