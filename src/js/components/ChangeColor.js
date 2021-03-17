import React, {Component} from "react";

class ChangeColor extends Component {


    render() {
        return (
            <span onClick={() =>
                this.props.changeColor()
            } className="changeColor">Change Color</span>
        )
    }
}

export default ChangeColor