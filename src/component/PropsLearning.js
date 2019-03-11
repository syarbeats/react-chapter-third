import React from 'react'

class PropsLearning extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler(){
        let item = "setState...";
        let myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray});
    };

    render(){
        return(
            <div>
                <button onClick={this.setStateHandler}> Set State</button>
                <h4> State Array: {this.state.data}</h4>
            </div>
        );
    }
}

export default PropsLearning;