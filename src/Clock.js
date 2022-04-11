import React, { Component } from "react";

export default class Clock extends Component {
    state = {
        date: new Date(),
    };

    componentDidMount = () => {
        this.timerId = setInterval(() => this.updateTime(), 1000);
    };

    componentWillUnmount = () => {
        clearInterval(this.timerId);
    };

    updateTime = () => {
        this.setState({ date: new Date() });
    };

    render() {
        const { date } = this.state;
        return (
            <div>
                <h1>The time is:</h1>
                <h2>{date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
