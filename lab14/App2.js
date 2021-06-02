import "./styles.css";

import React from "react";

class Pass extends React.Component {
  constructor(props) {
    super(props);
    var name = props.name;

    this.state = { name: name };
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(e) {
    var val = e.target.value;
    console.log(val);
    this.setState({ name: val });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.name}
        onChange={this.onNameChange}
      />
    );
  }
}
export default Pass;
