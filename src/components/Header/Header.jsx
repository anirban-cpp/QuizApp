import React from 'react';

import './Header.css';

const Header = ({user}) => {
  return (
      <header className='header'>
          JavaScript Quiz
          { user && <p className='header-user'>{`Welcome ${user}`}</p>}
      </header>
  )
}

export default React.memo(Header);