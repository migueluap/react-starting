import React from 'react';

export default class BotaoGol extends React.Component{
    handlerClick(event){
        event.preventDefault();
        this.props.marcarGol();

    }
    
    render(){
        return(
            <button onClick = {this.handlerClick.bind(this)}>Gool!</button>
        );
    }
}