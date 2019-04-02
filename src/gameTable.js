import React from "react";
import "./index.css";
import GameOfLife from "./gameOfLife";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.GameOfLife = GameOfLife;
    this.bounds = {
      topLeft: [0, 0],
      bottomRight: [this.props.size - 1, this.props.size - 1]
    };
  }

  createTableRow(rowIndex) {
    let row = [];
    for (let columnIndex = 0; columnIndex < this.props.size; columnIndex++) {
      let ids = rowIndex + "_" + columnIndex;
      row.push(<td onClick={this.makeCellAlive} id={ids} key={ids} />);
    }
    return row;
  }

  createTable() {
    let table = [];
    for (let rowIndex = 0; rowIndex < this.props.size; rowIndex++) {
      let row = this.createTableRow(rowIndex);
      table.push(<tr key={rowIndex}>{row}</tr>);
    }
    return <tbody id="table-body">{table}</tbody>;
  }

  render() {
    return (
      <div>
        <h2>Welcome to Game of Life</h2>
        <div className="table-view">
          <table id="table">{this.createTable()}</table>
        </div>
        <div className="button-view">
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default Table;
