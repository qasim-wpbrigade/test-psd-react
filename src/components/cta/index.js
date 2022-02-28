import React from 'react';
import { Link } from 'react-router-dom';

const data = {
    title: 'Tregåsa dogågisk ',
    description: 'Sit amet facilisis magna etiam. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Est sit amet facilisis magna etiam. Facilisis gravida neque convallis a cras semper. Duis tristique sollicitudin nibh sit amet. Vestibulum morbi ',
    btns: [
        {
            text: 'Kagt maska Kag',
            link: '#'
        },
        {
            text: 'dogågisk',
            link: '#',
            varient: 'btn-light'
        }
    ],
    bg: 'bg-black'
}

const Cta = () => {
  return (
    <div className={`cta-section ${data.bg && data.bg}`}>
        <div className="container">
            <h2>{data.title}</h2>
            <div className="divider"></div>
            <p>{data.description}</p>
            <div className="btns-wrapper">
                {data.btns.map((btn, index) => {
                    return (
                        <Link to={btn.link} className={`btn ${btn.varient && btn.varient}`} key={index}>{btn.text}</Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Cta