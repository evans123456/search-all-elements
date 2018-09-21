import React, { Component } from 'react';
import './App.css';

const headers ={
  headers:{
      'Authorization': `Basic ${btoa('evanpersie3@gmail.com:skolastikA97')}`
}
} 



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      
      ind_results:[],
      ds_results: [],
      dataElements_results:[],
      programs_results:[],
      filterText:'art'
    }
  }
  setInput = (e) => {
    
    this.setState({filterText: e.target.value});
    
    console.log('filtertext inside setinput()',this.state.filterText)
  }

  //and since the api is using like (it has to have a default value/try catch stuff)

  //sooooooo what needs to happen is the setInput function needs to be sent inside the componentwillmount()
  //or the componentwillmountfunction be a continous loop

  //there is a console.log inside the fetch indicators that is not getting updated values of the filtertext state
  //so i suspect its not being updated
  

  componentWillMount(){




    fetch(`http://197.136.81.99:8082/test/api/25/indicators.json?filter=displayName:ilike:${this.state.filterText}`, headers)
    .then(response => response.json())
    .then(data => {
     
      this.setState({
        ind_results:data.indicators
      })
      console.log('filtertext() state inside componentwillmount',this.state.filterText)
      console.log(this.state.ind_results)
    })

    fetch(`http://197.136.81.99:8082/test/api/25/dataSets.json?filter=displayName:ilike:${this.state.filterText}`, headers)
    .then(response => response.json())
    .then(data => {
     
      this.setState({
        ds_results:data.dataSets
      })
      console.log(this.state.ds_results)
    })

    fetch(`http://197.136.81.99:8082/test/api/25/dataElements.json?filter=displayName:ilike:${this.state.filterText}`, headers)
    .then(response => response.json())
    .then(data => {
     
      this.setState({
        dataElements_results:data.dataElements
      })
      console.log(this.state.dataElements_results)
    })

    fetch(`http://197.136.81.99:8082/test/api/25/programs.json?filter=displayName:ilike:${this.state.filterText}`, headers)
    .then(response => response.json())
    .then(data => {
     
      this.setState({
        programs_results:data.programs
      })
      console.log(this.state.programs_results)
    })

//----------------------------------------------------------------------------------

    



  }
  
  render() {
    const indicator_Items = this.state.ind_results.map( post => (
      <div key={post.id}>
          <h3>{ post.displayName }</h3>
         
      </div>
  ))

    const dataSets_Items = this.state.ds_results.map( post => (
    <div key={post.id}>
        <h3>{ post.displayName }</h3>
       
    </div>
))
    const dataElements_Items = this.state.dataElements_results.map( post => (
      <div key={post.id}>
          <h3>{ post.displayName }</h3>
        
      </div>
    ))

    const programs_Items = this.state.programs_results.map( post => (
      <div key={post.id}>
          <h3>{ post.displayName }</h3>
        
      </div>
    ))


    return (
      <div className="App">

        <input type="text" onChange={ this.setInput } value={ this.state.filterText } /> 
        {indicator_Items}
        {dataSets_Items}
        {dataElements_Items}
        {programs_Items}

        {/* {this.setInput()} */}
        
      </div>
    );
  }
}

export default App;
