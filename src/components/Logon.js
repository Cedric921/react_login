import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
//import * from '@mui/material'

const Logon = () => {
  const [name, setName] = useState('name')
  const [email, setEmail] = useState('email')
  const [phone, setPhone] = useState('phone')
  const [term, setTerm] = useState(false)

  const onLogon = (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      phone,
      term,
    }
    console.log(user)
  }

  return (
    <div className='log'>
      <form onSubmit={(e) => onLogon(e)}>
        <h3>Registration</h3>
        <div className='formGroup'>
          <label htmlFor='name'>First name</label>
          <input
            type='text'
            name={name}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name={email}
            id='email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            name={phone}
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
        </div>
        <div className='formGroup'>
          <input type='submit' value='Register' className='btn1' />
          <Link to='/login' className='btn2'>
            Login
          </Link>
        </div>
        <div className='formGroup'>
          <input
            type='checkbox'
            name={term}
            id='term'
            onChange={(e) => setTerm(/*e.currentTarget.checked*/ true)}
          />
          <label htmlFor='term' className='term'>
            I agree to the term and conditions of
            <Link to='/'> Privacy & policy</Link>
          </label>
        </div>
      </form>
    </div>
  )
}

export default Logon
