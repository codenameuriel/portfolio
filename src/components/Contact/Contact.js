import React, { Component } from 'react';
import ContactStyles from './Contact.module.css';
import emailjs from 'emailjs-com';
import { templateKey, userKey } from '../../key';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Modal from '../UI/Modal/Modal';
import { VscChromeClose } from 'react-icons/vsc';

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
    isValid: false,
    emailSent: false
  }

  blockDragNDrop = event => {
    event.preventDefault();
  }

  showModal() {
    this.setState({emailSent: true});
  }

  closeModal = () => {
    this.setState({emailSent: false});
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
        this.showModal();
      }
    
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { form } = this.state;
    
    return (
      <> 
        <Modal emailSent={this.state.emailSent}>
          <VscChromeClose onClick={this.closeModal}/>
          <p>Thanks for reaching out!</p>
        </Modal>
        <div className={ContactStyles.Contact}>
          <h1>Contact</h1>
          <div className={ContactStyles.MainContainer}>
            <div className={ContactStyles.SubContainer}>
              <h1>Reach Out</h1>
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

                <button onClick={this.sendEmail} disabled={!this.state.isValid}>Send</button>
              </form>
            </div>
            <hr/>
            <div className={ContactStyles.Info}>
              <h3>Thanks for checking out my portfolio</h3>
              <p>
                You can always come back and check out my new projects and blogs that will document my learning.
              </p>
              <p>
                If you would like to get in touch with me, you can send me an email using the form. Or you can check out my LinkedIn and GitHub.
              </p>
              <div className={ContactStyles.Icons}>
                <a 
                  href="https://www.linkedin.com/in/uriel-rodriguez-9ab2946b/" 
                  target="_blank" 
                  rel="noopener noreferrer"><FaLinkedin className={ContactStyles.Linkedin} onMouseDown={this.blockDragNDrop}/></a>
                <a 
                  href="https://github.com/codenameuriel" 
                  target="_blank" 
                  rel="noopener noreferrer"><FaGithub className={ContactStyles.Github} onMouseDown={this.blockDragNDrop}/></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
