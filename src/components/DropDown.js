import React, { Component } from "react";
import Comment from "./Comment";


export default class DropDown extends Component {


    state = {
        current: '',
        allCity: []
    }
    componentDidMount(){

    }
   

    handleView = (data) => {
        
        data.preventDefault();
        this.props.handleMain(data.target.innerText)
        this.setState({
            current: data.target.innerText 
        })

        
        


        

    }


    
    
    
    render() {
        let finallList = []
        for(let i = 0; i < this.props.allCities.length ; i++){
            finallList.push(this.props.allCities[i].properties)
        }
        
        
		return (
            <div className= 'list'>
                <h1 >Neighborhoods</h1>
                {
                    finallList.map((p) => {
                        
                       return  <Comment view = {this.handleView} data = {p}/> 
                       
                 })
                }
          
            </div>
             
            
            
		)
	}
}