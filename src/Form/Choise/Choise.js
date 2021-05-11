import React from 'react';
import ChoiseElem from '../ChoiseElem/ChoiseElem';

class Choise extends React.Component{
    constructor(props){
        super(props);

        this.state={
            elem: ['input',
            'textarea',
            'checkbox']
        }
    }
  render(){
    return(
        <div>
            
          {  this.state.elem.map(map=>{
               return <ChoiseElem changeForm={this.props.changeForm} type={map} />
          })}
            <button onClick={this.props.build}>Build</button>
        </div>
    )
  }
}

export default Choise;