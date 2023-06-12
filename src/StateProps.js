import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {

    constructor(props){
        super(props);
        this.state ={
            makanan : 'Bakso'
        }
    }

    gantiMakanan = (value) => {
        this.setState({
            makanan : value
        })
    }

  render() {
    return (
      <div>
        <h2> {this.state.makanan} </h2>
        {/* <button onClick={() => this.setState({makanan : 'Soto'})}>Ganti Makanan</button> */}
        <button onClick={() => this.gantiMakanan('Soto')}>Ganti Makanan</button>
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}></Operan>
      </div>
    )
  }
}
