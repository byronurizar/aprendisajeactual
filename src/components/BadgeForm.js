import React from 'react';

class BadgeForm extends React.Component{
//Inicializamos el estado para que nos de error al momento que el input le asigne el valor
//state={};// los inputs estan vacios

//Asignamos valores por default al estado
// state={
//     jobTitle:"Designer"
// };

    // handleChange=(e)=>{
    //     // console.log({
    //     //     name:e.target.name,
    //     //     value:e.target.value});

    //     this.setState({
    //         [e.target.name]:e.target.value
    //     });
    // }

    
    handleClick=(e)=>{
        console.log("Button was clicked");
    }
    
    
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Button was clicked");
        console.log(this.props.formValue);
    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Firs Name</label>
                        <input onChange={this.props.onChange}  type="text" className="form-control" name="firsName" value={this.props.formValue.firsName} />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange}  type="text" className="form-control" name="lastName" value={this.props.formValue.lastName}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange}  type="email" className="form-control" name="email" value={this.props.formValue.email}/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange}  type="text" className="form-control" name="jobTitle" value={this.props.formValue.jobTitle}/>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange}  type="text" className="form-control" name="twitter" value={this.props.formValue.twitter}/>
                    </div>


                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;