import React from 'react';

class ElementResult extends React.Component{
    constructor(props){
        super(props);
        this.mainingElementInput = this.mainingElementInput.bind(this);
        this.mainingElementTextarea = this.mainingElementTextarea.bind(this);
        this.mainingElementCheckbox = this.mainingElementCheckbox.bind(this);
    }

    mainingElementInput(e){
        let array =[];
        for(let i = 0;i<e;i++){
            array.push(<input type='text' />)
        }
        return array;
    }

    mainingElementTextarea(e){
        let array =[];
        for(let i = 0;i<e;i++){
            array.push(<textarea type='text' />)
        }
        return array;
    }

    mainingElementCheckbox(e){
        let array =[];
        for(let i = 0;i<e;i++){
            array.push(<div> <input type='checkbox' />  </div>)
            
        }
        return array;
    }
    render(){
        return(
            <>
            <form name='information'>
            <h1> Input</h1>
            <br />
            {this.mainingElementInput(this.props.input)}
            <br />
            <h1> Textarea</h1>
            <br />
            {this.mainingElementTextarea(this.props.textarea)}
            <br />
            <h1> Checkbox</h1>
            <br />
            {this.mainingElementCheckbox(this.props.checkbox)}
            </form>
            </>
        )
    }
}

export default ElementResult;