import React, { Component } from 'react';
import Counter from './Counter';
import PropsLearning from './PropsLearning';

class RightContent extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Right Side</div>
                <div className="card-body">
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