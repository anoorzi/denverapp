import React, { Component } from "react";

export default class Display extends Component {



    state = {
        comment: '',
        allComments: [],
        status: false,
        edit:''
    }
    
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let newList = [...this.state.allComments,this.state.comment]
        
        this.setState({
        allComments: newList,
        comment: ''


        })
    }

    handleDelete = (arg) =>{

        let newList = []
        for(let i = 0 ; i < this.state.allComments.length ; i++){
                if(arg !=this.state.allComments[i] ){
                    newList.push(this.state.allComments[i])
                }
            
        }
        this.setState({
            allComments: newList
        })

    }

    handleEdit = (arg) =>{



        let temp = []

        for(let i = 0; i < this.state.allComments.length; i++){
            if(this.state.allComments[i] == arg){
                temp.push(this.state.edit)
            }
            else{
                temp.push(this.state.allComments[i])

            }
        }
        this.setState({
            allComments: temp,
            edit: ''
        })

    }

    


    

    
    
    render() {
        

		return (
            <div>
                <h1 className= 'city'>Current Viewing City</h1>
                {
                this.props.view && 
                <div className = 'dataset'>
                        <p>{this.props.view.neighborhood_name}</p>
                        <p> Median Age: {this.props.view.median_age}</p>
                        <p> Median Income: {this.props.view.median_income}</p>
                        <p> Unemployment: {this.props.view.unemployment}</p>

                        <p> Homeowners: {this.props.view.homeowners}</p>
                        <p> Total Population: {this.props.view.total_population}</p>
                        <p> Poverty Level: {this.props.view.poverty_level}</p>


                        <p> High School Grads: {this.props.view.high_school_grad}</p>
                        <p> Total Renters: {this.props.view.high_school_grad}</p>
                        <p> Identify Speaking English well: {this.props.view.identifies_as_speaking_english_less_well}</p>


                
                </div>



                
                }


                {
                  this.state.allComments.map((p) => {
                  
                  return  <div> 
                             <p> {p} </p> 
                             <button onClick = {() => this.handleEdit(p)}> Edit</button>  
                             <button onClick = {() => this.handleDelete(p)}> Delete</button>      
                         
                         </div>
                       
                  })
                }

                <form>
					<input
						type="text"
						name="comment"
						placeholder="Place Comments Here"
						value={this.state.comment}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleSubmit}> Submit New Note </button>
				</form>
                {
                
                    <div>
                        <input
						type="text"
						name="edit"
						placeholder="Edit Note Here"
                        value={this.state.edit}
                        onChange={this.handleChange}	/>


                    </div>
                }
            </div>
             
            
            
		)
	}
}