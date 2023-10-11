import React from 'react'

type BootstrapProps = {}

const Bootstrap: React.FC<BootstrapProps> = ({}) => {
  return (
    <form
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid gray',
        boxShadow: '5px 5px 5px gray',
        width: '500px',
        borderRadius: '20px',
        padding: '50px 20px'
      }}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={{width: '350px'}}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          style={{width: '350px'}}
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Bootstrap
