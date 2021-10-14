
import User from './User'
import UserForm from './UserForm'
import axios from 'axios';
import schema from './formSchema';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react'
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  agree: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
 
}
const initialUsers = []
const initialDisabled = true
function App() {
  const [users, setUsers] = useState(initialUsers)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean
  
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        
        setUsers(res.data.data)

      }).catch(err => {
        console.error(err)
      })
  }

  const postNewUser = newUser => {
  
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users,res.data])
        console.log('users')
        console.log(res)
        
       
        
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
     // agree: formValues.agree,
     
     
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])
  useEffect(() => {
    
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <div >
      <header >
        <h1>User App</h1>
      </header>
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
       {
        users.map(user=> {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}

export default App
