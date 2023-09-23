import React, { Component } from "react";
import Table from "./Table.js";
import Form from "./Form.js";

class App extends Component {
  state = {
    alunos: [ ]
  };
  removerAluno = (index) => {
    const { alunos } = this.state;
    this.setState({
      alunos: alunos.filter((alunos, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    const { alunos } = this.state;
    return (
      <div className="container">
        <Table alunos={alunos} 
        removerAluno={this.removerAluno} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
  handleSubmit = (alunoDisc) => {
    this.setState({
        alunos: [...this.state.alunos, alunoDisc]
    })
  }
}
export default App;
