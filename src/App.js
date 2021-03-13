import React from "react";
import './App.css';
import * as denverdata from "./denver_mapping_data.json";
import DropDown from "./components/DropDown";
import Display from "./components/Display";




class App extends React.Component {

  state = {
    currentView: [],
    AllViews: {}
  }
  handleData = (arg) => {
		fetch("denver_mapping_data.geojson")
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data)
			});
  };

  handleMain = (arg) => {


        let result = {}
        for(let i = 0; i < this.state.AllViews.length ; i++){
            if(this.state.AllViews[i].properties.neighborhood_name == arg){
              result = this.state.AllViews[i].properties
            }
        }
        console.log(result)

        


    this.setState({
      currentView: result
    })
  
    
  }
  
  componentDidMount() {
    this.setState({
      AllViews: denverdata.default.features
    })

  }

  
  render(){

    return (
      <div className='App'>
        <h1 className='header'>
          Welcome To Denver Data!
        </h1>
        <DropDown  handleMain = {this.handleMain} allCities = {this.state.AllViews}/>
        <Display view= {this.state.currentView}/>


      </div>
      
    )
  }
}

export default App;
