import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faList } from '@fortawesome/free-solid-svg-icons'
import testdrive from '../assets/images/misc/testdrive.svg'

const StickyCont = () => {
    return (
        <React.Fragment>
            <div class="sticky-container">
                <ul class="sticky">
                    <li>
                        <i><img src={testdrive} style={{width: `30px`}} alt="" /></i>
                        <p><a href="https://zfrmz.in/TXkctOvJ9gonSBGuaG3e" target="_blank">Book a Test Drive</a></p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faList} /></i>
                        <p><a href="https://zfrmz.in/EqaRtWwyH4dUPOxwlpLR" target="_blank">Request for Pricing</a></p>
                    </li>
                </ul>   
            </div>
        </React.Fragment>
    )
}

export default StickyCont