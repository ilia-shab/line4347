import React from 'react';
import Choise from './Choise/Choise'
import ResultChoise from './ResultChoise/ResultChoise'

class Form extends React.Component{
constructor(props){
    super(props);

    this.state = {
        input: '',
        textarea:'',
        checkbox:'',
        build: false
    }
    
    this.changeForm = this.changeForm.bind(this);
    this.clickBuild=this.clickBuild.bind(this);
}

changeForm(keyName,value){
  

    this.setState({
        [keyName]:value
    })
}

clickBuild(){
this.setState({
    build: true
})
}

render(){
    return(
        <div>
        
        {this.state.build?  <ResultChoise input={this.state.input} textarea={this.state.textarea} checkbox={this.state.checkbox}/>
         : <Choise changeForm={this.changeForm} build={this.clickBuild} />}
       
        </div>
        )
}
}

export default Form;