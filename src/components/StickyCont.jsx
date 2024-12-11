import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faList } from '@fortawesome/free-solid-svg-icons'
import testdrive from '../assets/images/misc/testdrive.webp'

const StickyCont = () => {
    return (
        <React.Fragment>
            <div class="sticky-container">
                <ul class="sticky">
                    <li>
                        <i><img src={testdrive} style={{width: `30px`}} alt="" /></i>
                        <p><a href="https://forms.zohopublic.in/adminathon/form/BookTestDrive1/formperma/mKld_JO84SgHgQchcoYFSbfcdhuuo2tezduouvZjgeE" target="_blank">Book a Test Drive</a></p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faList} /></i>
                        <p><a href="https://forms.zohopublic.in/adminathon/form/Vehiclepriceenquiry/formperma/icZmwUcF6C00Jc4SRojfAtYq2B6ArgrxGyQVqJ_ww54" target="_blank">Request for Pricing</a></p>
                    </li>
                </ul>   
            </div>
        </React.Fragment>
    )
}

export default StickyCont