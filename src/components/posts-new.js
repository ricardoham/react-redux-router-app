import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'

class PostsNew extends Component {

    // field argumenet contains the eventHandler, that responsable to knows what in the the 
    // particular text field bellow
    renderField(field) {
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                {/* Pre generated eventHandler
                Same as onChange = {field.input.onChange}
                Same as onFocus = {field.input.onFocus}
                Same as onBlue = {field.input.onBlur} */}
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error: ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        
        // this === component
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
        // console.log(values);
        
    }

    render(){
        // Handle the form and see if everything is okay
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );

    }
}

function validate(values) {
    // console.log(values) -> { title: 'asudah', categories: 'asuhdhausd', content: 'sauhdaushd' }
    const errors = {};

    // (!values.title || values.title.length < 3)
    // Validade the inputs from 'values'
    if(!values.title) {
        errors.title = "Enter a title";
    }
    if(!values.categories) {
        errors.categories = "Enter a category";
    }
    if(!values.content) {
        errors.content = "Enter some content please";
    }


    // If errors is empty, the form is fine to submit
    // If errors has any properties, redux form assume form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'

})(
    connect(null, {createPost})(PostsNew)
);