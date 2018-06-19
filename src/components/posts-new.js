import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

    // field argumenet contains the eventHandler, that responsable to knows what in the the 
    // particular text field bellow
    renderField(field) {
        return (
            <div className="form-group">
                {/* Pre generated eventHandler
                Same as onChange = {field.input.onChange}
                Same as onFocus = {field.input.onFocus}
                Same as onBlue = {field.input.onBlur} */}
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }


    render(){
        return (
            <form>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Tags"
                    names="tags"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    names="contet"
                    component={this.renderField}
                />
            </form>
        );

    }
}

export default reduxForm({
    form: 'PostsNewForm'

})(PostsNew);