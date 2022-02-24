import React from 'react'
import { Link } from 'react-router-dom'

const TermSection = () => {
  return (
    <div className='termSection'>
        <div className="container">
            <div className="term-box">
                <h5 className="heading">
                    october 2021 term
                </h5>
                <table className="term-table">
                    <tbody>
                        <tr>
                            <th>Oct 01, 2021</th>
                            <td>Payment Due</td>
                        </tr>
                        <tr>
                            <th>Oct 01, 2021</th>
                            <td>Application Due</td>
                        </tr>
                        <tr>
                            <th>Oct 04, 2021</th>
                            <td>Term Start</td>
                        </tr>
                        <tr>
                            <th>Oct 08, 2021</th>
                            <td>Unregister/Cancel Deadline</td>
                        </tr>
                        <tr>
                            <th>Oct 07, 2021</th>
                            <td>Term End</td>
                        </tr>
                    </tbody>
                </table>
                <div className="termBoxFooter">
                    <h5>Contact an Enrollment Counselor to learn the start dates available for your program.</h5>
                    <Link className='btn' to="/">Kagt maska</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TermSection