import React,{Componenet}from 'react';

class Statefull extends Componenet{
    constructor(props){
        super(props);
        this.state={
            hello:"Hola mundo"
        };
    }
    render(){
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default Statefull; 
