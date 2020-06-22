import React from 'react';
import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg'

import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: ""
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({ loading: false, form: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    handleChange = e => {

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
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value //Añadimos o sobre escribimos
            }
        })
        //

    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
        try {
            await api.badges.update(this.props.match.params.badgeId,this.state.form);
            this.setState({ loading: false, error: null });

            //Para hacer la redirección de badges
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if (this.state.loading === true) {
            return <PageLoading />
        }

        // if (this.state.error) {
        //     return <PageError error={this.state.error}/>
        // }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"></img>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRS_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'EMAIL'} />
                        </div>

                        <div className="col-6">
                        <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                formValue={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;