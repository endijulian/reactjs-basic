import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Formulir";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: [],
      nama: "",
      description: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      makanan: [
        ...this.state.makanan,
        {
          id: this.state.makanan.length + 1,
          nama: this.state.nama,
          description: this.state.description,
          harga: this.state.harga,
        },
      ],
    });

    this.setState({
      nama: "",
      description: "",
      harga: 0,
      id: "",
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent></NavbarComponent>
        <div className="container mt-4">
          <Tabel makanan={this.state.makanan}></Tabel>
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          ></Formulir>
        </div>
      </div>
    );
  }
}
