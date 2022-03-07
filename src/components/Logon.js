import React, { useState} from 'react'

const Logon = ({onLogon}) => {
   const [name, setName] = useState("name");
   const [email, setEmail] = useState('email');
   const [phone, setPhone] = useState('phone');
   const [term, setTerm] = useState(false);

  return (
    <div className='log'>
      <form onSubmit={onLogon}>
      <h3>Registration</h3>
        <div className='formGroup'>
          <label htmlFor='name'>First name</label>
            <input type='text'
                 name={name}
                 value={name}
               onChange={(e) => setName(e.currentTarget.value)}
            />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input type='email'
                 name={email} id='email'
                 value={email}
               onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='phone'>Phone</label>
          <input type='tel'
                 name={phone} id='phone'
                 value={phone}
               onChange={(e) => setPhone(e.currentTarget.value)}
            />
        </div>
        <div className='formGroup'>
          <input type='submit' value='Register' className='btn1' />
          <a href='#' className='btn2'>
            Login
          </a>
        </div>
        <div className='formGroup'>
            <input type='checkbox'
               name={term} id='term'
               onChange={(e) => setTerm(e.currentTarget.checked)}
            />
          <label htmlFor='term' className='term'>I agree to the term and conditions of <a href="">Privacy & policy</a> </label>
        </div>
      </form>
    </div>
  )
}

export default Logon;