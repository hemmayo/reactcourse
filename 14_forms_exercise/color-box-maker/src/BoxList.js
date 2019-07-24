import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export default class BoxList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(data) {
        this.setState(st => ({ boxes: [...st.boxes, data] }));
    }

    removeBox(id) {
        this.setState(st => {
            let boxes = [...st.boxes];
            boxes.splice(id, 1);
            return { boxes };
        });
    }

    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addBox} />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {this.state.boxes.map((box, i) => (
                        <Box
                            {...box}
                            removeBox={this.removeBox}
                            key={i}
                            id={i}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
