import React from 'react';

class OratOret extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data: "Initial data..."
        }

        this.updateState = this.updateState.bind(this);
    };

    updateState(e){
        this.setState({data: e.target.value});
    }
    render(){
        return(
            <div className="card">
                <div className="card-header">Orat Oret</div>
                <div className="card-body">
                    <div>
                        <Content myDataProp = {this.state.data} updateStateProp = {this.updateState}></Content>
                    </div>
                </div>
            </div>
        );
    }
}

class Content extends React.Component {
    myDataProp;
    updateStateProp;
    render() {
        return (
            <div>
                <input type = "text" value = {this.props.myDataProp}
                       onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default OratOret;