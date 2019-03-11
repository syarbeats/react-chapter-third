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
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    myNumber;
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default PropsLearning;