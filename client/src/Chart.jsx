import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'

class Chart extends Component {
  constructor() {
    super () 
      this.state = {
    }
  this.getRequest = this.getRequest.bind(this) 
  }
 
  getRequest(){
    axios.get('/prices')
    .then((response)=>{
      this.setState({
        chartData: {
          labels: [...response.data.label],
          datasets: [{
          label: "Bitcoin closing price in USD over the last 30 days",
          backgroundColor: 'rgb(117, 196, 57)',
          borderColor: 'rgb(241, 245, 27)',
          data: [...response.data.data],
          }]
      }
    })
  })
    .catch((error)=>{
      console.log(error)
    })
  }
  componentDidMount(){
    this.getRequest()
  }

  render(){
    return (
    <div className="chart">
      <Line 
        data={this.state.chartData}/>
    </div>)
  }
}


export default Chart