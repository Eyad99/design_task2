import React, {Component} from 'react';
import Product from './Product'

class App extends Component{
  state = {
    data : []
  }

  render(){
  //  const response_api = () =>{
  //     axios.get("https://wawwinner.ae/dev/public/api/v1/front-end/campaign").then(res =>{
  //       console.log(res.data.data)
  //     })
  // }
  // response_api()
    return(
      <div className="container">
        <Product />
      </div>
    )
  }
}
export default App;
