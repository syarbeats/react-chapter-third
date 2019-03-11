import React, { Component } from 'react';
import Counter from './Counter';
import PropsLearning from './PropsLearning';

class RightContent extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Right Side</h4>
                    <Counter />
                    <PropsLearning />
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        );
    }
}
export default RightContent;