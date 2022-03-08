import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Logon = () => {
  const [name, setName] = useState('name')
  const [email, setEmail] = useState('email')
  const [phone, setPhone] = useState('phone')
  const [term, setTerm] = useState('false')

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
          <TextField
            fullWidth
            id='name'
            label='name'
            variant='outlined'
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <TextField
            fullWidth
            id='email'
            label='email'
            variant='outlined'
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='phone'>Phone</label>
          <TextField
            fullWidth
            id='phone'
            label='phone'
            variant='outlined'
            onChange={(e) => setPhone(e.currentTarget.value)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </div>
        <div className='formGroup'>
          
          <Button variant='contained' color='success' className='btn1'>
            Register
          </Button>
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
