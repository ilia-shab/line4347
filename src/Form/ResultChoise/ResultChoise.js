import React from 'react';
import ElementResult from '../ElementResult/ElementResult';

class ResultChoise extends React.Component{
    render(){
    return(
    <>
     <ElementResult input={this.props.input} textarea={this.props.textarea} checkbox={this.props.checkbox}/>   
    </>
)
    }
}

export default ResultChoise;