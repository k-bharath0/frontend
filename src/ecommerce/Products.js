import React, { Component } from 'react'

export default class Products extends Component {
  state={
        products:[]
  }
  componentDidMount(){
    fetch("https://backend-bbcw.onrender.com/products")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        this.setState({
            products:res
        })

    })
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        {
            this.state.products.map((pd)=>(
                <div key={pd.name}>
                    <p>Name:{pd.name}</p>
                    <p>Price:{pd.price}</p>
                    <p><img src={pd.image} alt={pd.name} width="20%"/></p>
                </div>
            ))
        }
      </div>
    )
  }
}
