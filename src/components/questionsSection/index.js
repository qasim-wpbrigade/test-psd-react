import React from 'react';
import Accordion from '../accordion';
import {data} from './questionsData';

const Questions = () => {
  return (
    <div className='questionsSection'>
        <div className="container">
            <h3>Frequently asked questions?</h3>
            <div className="row">
                <div className="col-6">
                    <Accordion data={data} />
                </div>
                <div className="col-6">
                    <Accordion data={data} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions