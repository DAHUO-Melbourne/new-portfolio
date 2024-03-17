import React from 'react';
import {useHistory} from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  return (
    <div
      style={{
        width: '100%',
        height: '30px',
        display: 'flex',
        justifyContent: 'start',
        position: 'fixed',
        top: 0
      }}
    >
      <div style={{marginRight: 5}}>Your name</div>
      <div
        style={{marginRight: 5}}
        onClick={() => {
          history.push('/')
        }}
      >
        Home page
      </div>
      <div
        style={{
          marginRight: 5,
          cursor: 'pointer'
        }}
        onClick={() => {
          history.push('/projects')
        }}
      >
        Projects
      </div>
      <div style={{marginRight: 5, cursor: 'pointer'}}>resume</div>
      <div>contact</div>
    </div>
  );
}

export default Header;