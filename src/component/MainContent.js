import React , { Component } from 'react'

import RightContent from './RightContent'
import LeftContent from "./LeftContent";
import InsertEmployee from './InsertEmployee';
import OratOret from './OratOret';

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
                    <div className="row" style={{marginTop: "25px"}}>
                        <div className="col-md-6">
                            <InsertEmployee/>
                        </div>
                        <div className="col-md-6">
                            <OratOret />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default MainContent;