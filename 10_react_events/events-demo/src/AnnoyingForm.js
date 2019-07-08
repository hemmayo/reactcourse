import React, { Component } from "react";

class AnnoyingForm extends Component {
  handleKeyUp(evt) {
    if (evt.keyCode === 56) {
      alert("***************** I LOVE THE * CHARACTER *****************");
    } else {
      alert("BOO");
    }
  }
  render() {
    return (
      <div>
        <h3>Try Typing In Here:</h3>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}
export default AnnoyingForm;
