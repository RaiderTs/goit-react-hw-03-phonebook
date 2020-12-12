import React, { Component } from 'react';
import style from './Form.module.css';
import shortid from 'shortid'; // Не забыть дабавить динамический ID
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { AddContact } = this.props;

    const isValidateForm = this.validateForm();

    if (!isValidateForm) return;

    AddContact({ id: shortid.generate(), name, number });

    this.reset();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onUnique } = this.props;
    if (!name || !number) {
      toast.error('One of the fields is not filled');
      return false;
    }
    return onUnique(name);
  };

  reset = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.label}>
          number
          <input
            className={style.input}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
