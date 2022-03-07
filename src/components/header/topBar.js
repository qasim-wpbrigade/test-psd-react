import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const topNavData = [
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
        link: '/contact'
    },
    {
        name: '800-000-0000',
        link: 'tel:8000000000'
    },
]

const TopBar = () => {
  const [show, setshow] = useState(false);
  const [search, setsearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  }
  return (
    <div className="headerTopBar">
        <div className="container">
          <ul className="topBarNav">
                {topNavData.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    )
                })}
          </ul>
          <div className="search">
            <button onClick={() => setshow(!show)} className='search-btn'></button>
            <form onSubmit={handleSearch} className={`search-form ${show && 'show'}`}>
              <h6>search</h6>
              <p>Lörem ipsum antipöskapet treheten </p>
              <input type="search" value={search} onChange={e => setsearch(e.target.value)} placeholder='search' id='search' />
              <button className='btn' type="submit">Kagt maska</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default TopBar;