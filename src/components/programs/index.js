import React from 'react';
import ProgramBox from './programBox';
import {data} from './programsData.js';

const Programs = () => {
  return (
    <div className='programsSection'>
        <div className='container'>
            <div className="programs-wrapper">
                {
                    data.map(row => (
                        <ProgramBox key={row.id} data={row} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Programs