import React , { Component } from 'react'

import RightContent from './RightContent'
import LeftContent from "./LeftContent";

class MainContent extends Component {
    render(){
        return (
            <div className="container">
                <main>
                    <div className="row">
                        <div className="col-md-6">
                            <LeftContent />
                        </div>
                        <div className="col-md-6">
                            <RightContent />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default MainContent;