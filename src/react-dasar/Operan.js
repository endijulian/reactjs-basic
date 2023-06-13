import React, { Component } from 'react'

export default class Operan extends Component {
  render() {

    const {makanan, gantiMakanan} = this.props

    return (
      <div>
        <h3>Operan State yang menjadi Props: {makanan}</h3>
        <button onClick={() => gantiMakanan('Soto')}>Ganti Makanan</button>
      </div>
    )
  }
}
