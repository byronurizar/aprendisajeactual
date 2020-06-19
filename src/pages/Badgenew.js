import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
class BadgeNew extends React.Component{
state={form:{
    firsName:"",
    lastName:"",
    email:"",
    jobTitle:"",
    twitter:""
}}

    handleChange=e=>{
        
        //Esto para evitar que cuando otro input genere el evento se remplace el valor del esetado
        //Primera Forma
        // const nextForm=this.state.form;
        // nextForm[e.target.name]=e.target.value;
        
        // this.setState({
        //     form:nextForm
        // })
        //segunda Forma
        //... dejamos caer todos los valores que tiene el estado
        this.setState({
            form:{
                ... this.state.form,
                [e.target.name]:e.target.value //Añadimos o sobre escribimos
            }
        })
        //

    }
 render(){
     return (
        <div>
        <Navbar/>
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo"></img>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-6">
                <Badge
                 firsName={this.state.form.firsName} 
                 lastName={this.state.form.lastName} 
                 avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                 jobTitle={this.state.form.jobTitle} 
                 twitter={this.state.form.twitter}/>
                </div>

                <div className="col-6">
                    <BadgeForm onChange={this.handleChange} formValue={this.state.form} />
                </div>
            </div>
        </div>    
        </div>
     )
 }
}

export default BadgeNew;