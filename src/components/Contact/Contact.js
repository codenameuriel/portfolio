import React, { Component } from 'react';
import ContactStyles from './Contact.module.css';
import emailjs from 'emailjs-com';
import { templateKey, userKey } from '../../key';

class Contact extends Component {
  state = {
    form: {
      name: {
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        value: '',
        validation: {
          isEmail: true
        },
        valid: false
      },
      message: {
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    },
    isValid: false
  }

  checkValidity(value, condition) {
    if (condition.required) return value.trim() !== '';
    if (condition.isEmail) {
      const pattern = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
      return pattern.test(value);
    }
  }

  inputHandler = event => {
    const updatedForm = {...this.state.form};
    const updatedInput = {...updatedForm[event.target.name]};
    
    updatedInput.value = event.target.value;
    updatedInput.valid = this.checkValidity(event.target.value, updatedInput.validation);
    updatedForm[event.target.name] = updatedInput; 

    let isValid = true;
    for (let inputName in updatedForm) {
      isValid = isValid && updatedForm[inputName].valid;
    }

    this.setState({
      form: updatedForm,
      isValid: isValid
    });
  }

  clearInputFields() {
    const clearedForm = {...this.state.form};
    for (let inputName in clearedForm) {
      const clearedInput = {...clearedForm[inputName]};
      clearedInput.value = '';
      clearedInput.valid = false;
      clearedForm[inputName] = clearedInput;
      this.setState({form: clearedForm});
    }
    this.setState({isValid: false});
  }

  sendEmail = async(event) => {
    try {
      event.preventDefault();

      const { form } = this.state;
  
      const templateParams = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      }
    
      if (this.state.isValid) {
        emailjs.send('gmail', templateKey, templateParams, userKey);
        this.clearInputFields();
      }
    
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { form } = this.state;
    return (
      <div className={ContactStyles.Contact}>
        <h1>Connect with me</h1>
        <form>
          <input
            onChange={this.inputHandler} 
            type="text" 
            name="name"
            placeholder="Name" 
            value={form.name.value}/>

          <input
            onChange={this.inputHandler}  
            type="email" 
            name="email"
            placeholder="Email" 
            value={form.email.value}/>

          <textarea
            onChange={this.inputHandler}  
            name="message"
            placeholder="Message"
            value={form.message.value}/>

          {/* <input type="submit" disabled={!this.state.isValid} value="Reach Out"/> */}
          <button onClick={this.sendEmail} disabled={!this.state.isValid}>Reach Out</button>
        </form>
      </div>
    );
  }
}

export default Contact;
