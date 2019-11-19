import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      object: [],
      result:[]
    }
  }

  componentDidMount ()  {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus'; // Doesn’t send Access-Control-*
    axios.get(proxyurl + url)
      .then(res => {
        const object = res.data;
        const result = res.data.map(({  
          "ROUTE": route,
          "LATITUDE": lat,
          "LONGITUDE": long,
          "TIMEPOINT": timepoint 
        }) => ({ route, lat, long, timepoint }));
        this.setState({result});
        this.setState({object});
      })
      .catch(function(error) {
        console.log(error);
      }); 
    }


  render() {
    console.log(this.state.result);
    return (
      <div className="App"></div>
    );
  }
}

export default App;
