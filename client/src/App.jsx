import React from 'react'
import ReactDOM from 'react-dom'
import Chart from './Chart.jsx'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      data: [],
      startDate: '',
      endDate: ''
    }
    
  }

  render() {
    return(
      <div>
       <Chart/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))