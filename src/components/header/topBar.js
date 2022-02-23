import React from 'react';
import { Link } from 'react-router-dom';

const TopNavData = [
    {
        name: 'daop randiop',
        link: '/'
    },
    {
        name: 'randiop lopa',
        link: '/'
    },
    {
        name: 'paywid e fale',
        link: '/'
    },
    {
        name: 'contact us',
        link: '/'
    },
    {
        name: '800-000-0000',
        link: 'tel:8000000000'
    },
]

const TopBar = () => {
  return (
    <div className="headerTopBar">
        <div className="container">
          <ul className="topBarNav">
                {TopNavData.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    )
                })}
          </ul>
          <div className="search">
            <button className='search-btn'></button>
            <form className="search-form">
              <h6>search</h6>
              <p>Lörem ipsum antipöskapet treheten </p>
              <input type="search" placeholder='search' id='search' />
              <button className='btn' type="submit">Kagt maska</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default TopBar;