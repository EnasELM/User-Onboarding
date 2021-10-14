import React from 'react'

export default function UserForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    
    const { name, value, checked, type } = evt.target;
    console.log(evt.target);

    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
    console.log(name);
    console.log(valueToUse);
  }
  return (
    <form  onSubmit={onSubmit}>
      <div >
        <h2>Add a User</h2>

        {/*  DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div >
          {/*  RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>
        <label>Password&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>


        
      </div>

      <div >
        
        {/* ////////// CHECKBOXES ////////// */}
        <label>Agree
          <input
            type="checkbox"
            name="agree"
            onChange={onChange}
            checked={values.agree}
          />
        </label>

        
      </div>
    </form>
  )
}

