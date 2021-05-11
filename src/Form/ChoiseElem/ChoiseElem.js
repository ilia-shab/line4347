import React from 'react';

class ChoiseElem extends React.Component{

    constructor(props){
        super(props);
        this.changeValue= this.changeValue.bind(this);
    }

    changeValue(e){
        this.props.changeForm(this.props.type,e.target.value)
    }

    render(){
        
        return(
            <div className={this.props.type}>
            <h1 style={{display: 'inline'}}> Введите количество для {this.props.type}    </h1>
            <input style={{display: 'inline'}} onChange={this.changeValue} />
        </div>
        )
    }
}


export default ChoiseElem;