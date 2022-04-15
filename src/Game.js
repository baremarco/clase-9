import React, { Component } from "react";
import PropTypes from "prop-types";

import Clock from "./Clock";
import Button from "./components/Button";

class Game extends Component {
    render() {
        return (
            <div>
                {this.props.greet}
                <Clock />
                <Button text="Click me" />
            </div>
        );
    }
}

Game.defaultProps = {
    greet: "Hello World",
};

Game.propTypes = {
    greet: PropTypes.string,
};

export default Game;
