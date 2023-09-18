import React, { useState } from 'react';
import './contact.css';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters.'),
  email: Yup.string().required('Email is required').email('Invalid email format.'),
  subject: Yup.string().required('Subject is required').min(3, 'Subject must be at least 3 characters.'),
  message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters.'),
});

export default function Form(props) {
  const initValues = { name: "", email: "", subject: "", message: "" };
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [touched, setTouched] = useState({});

  const handleChange = ({ target }) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [target.name]: '',
    }));

    setValues((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const handleBlur = async ({ target }) => {
    try {
      setTouched((prev) => ({ ...prev, [target.name]: true }));
      await validationSchema.validateAt(target.name, values);

      setErrors((prevErrors) => ({
        ...prevErrors,
        [target.name]: '',
      }));
    } catch (error) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [target.name]: error.message,
    }));
  }};

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(values, { abortEarly: false });

      const sendContactEmail = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(values),
      });

      if (sendContactEmail.ok) {
        setTouched({});
        setSuccess('Message sent successfully.');
        setErrors({});
        setValues(initValues);
        props.onSuccess();
      } else {
        console.error('Failed to send email');
      }

    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach(error => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <form id="myForm" className='form_container' onSubmit={onSubmit}>
      <div className='input_container'>
        <div className='form_group'>
          <input className='form_input'
                  type="text"
                  name="name"
                  minLength={3}
                  maxLength={150}
                  required
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="YOUR NAME" />
          {touched.name && errors.name && <p className='error'>{errors.name}</p>}
        </div>
      </div>
      <div className='input_container'>
        <div className='form_group'>
          <input className='form_input'
                  type="email"
                  name="email"
                  minLength={3}
                  maxLength={150}
                  required
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="YOUR EMAIL" />
          {touched.email && errors.email && <p className='error'>{errors.email}</p>}
        </div>
      </div>
      <div className='input_container'>
        <div className='form_group'>
          <input className='form_input'
                  type="text"
                  name="subject"
                  minLength={3}
                  maxLength={150}
                  required
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="YOUR SUBJECT" />
          {touched.subject && errors.subject && <p className='error'>{errors.subject}</p>}
        </div>
      </div>
      <div className='input_container'>
        <div className='form_group'>
          <textarea className='form_input'
                    rows='10'
                    name="message"
                    minLength={10}
                    maxLength={500}
                    required
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="YOUR MESSAGE"></textarea>
          {touched.message && errors.message && <p className='error'>{errors.message}</p>}
        </div>
      </div>
      <div>
        {success && <p className='success'>{success}</p>}
      </div>
      <div className='input_container'>
        <button
          type="submit"
          className={(!values.name || !values.email || !values.subject || !values.message) ? 'send_button_disabled' : 'send_button'}
          disabled={!values.name || !values.email || !values.subject || !values.message} >
          Send Message
        </button>
      </div>
    </form>
  );
};
