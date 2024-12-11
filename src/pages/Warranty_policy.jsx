import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Header1 from '../components/Header1'
import Preloader from '../components/Preloader'
import StickyCont from '../components/StickyCont'

const Warranty_policy = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Header1 />
            <StickyCont />
            <Container className='mt-5 mb-5'>
                <h4 className='text-center'>Warranty Policy</h4>
                <p>This warranty is effective for all from 04.12.2024.</p>
                <p><strong>A-Thon Allterrain Private Limited</strong>, hereinafter referred to as <strong>'A-Thon,'</strong> warrants that every current and newly sold A-Thon vehicle will be free from defects in material and workmanship when used and maintained under normal conditions, commencing from the Date of Delivery to the new customer, subject to the terms and conditions outlined below.</p>
                <p>This warranty effects only within <strong>INDIA</strong>.</p>
                <p>Period specified is dependent upon whichever occurs earlier. (To be retained considering the time of purchase and km and details of the same to be added)</p>
                <p><strong>What’s Covered:</strong></p>
                <p>Subject to the exclusions specified under <strong>'What is Not Covered,'</strong> our Authorized Dealers will, within the stipulated warranty period, repair or replace any A-Thon’s genuine part deemed defective in material or workmanship by A-Thon, at no cost to the vehicle owner for parts or labour. Any defective parts replaced under this warranty shall become the sole property of A-Thon.</p>
                <p><strong>Complimentary roadside Assistance</strong> shall be provided during the warranty period.</p>
                <p><strong>Exclusions to Warranty Coverage</strong></p>
                <p>This warranty does not apply to the following:</p>
                <ul>
                    <li><strong>Routine Maintenance Services</strong>
                        <ul>
                            <li>Cleaning, polishing, minor adjustments, engine tuning, oil/fluid changes, filter replacements, fastener tightening, wheel balancing, alignment, and tire rotation are excluded, except for the three free services.</li>
                        </ul>
                    </li>
                    <li><strong>Replacement of Wear-and-Tear Parts</strong>
                        <ul>
                            <li>Parts such as spark plugs, belts, brake pads, brake linings, clutch discs, filters, wiper blades, bulbs, and fuses.</li>
                        </ul>
                    </li>
                    <li><strong>Damage or Failure Arising from the Following:</strong>
                        <ul>
                            <li>Failure to adhere to the maintenance requirements specified in the Owner's Manual and Service Booklet.</li>
                            <li>Misuse, abuse, accidents, theft, fire, or flooding.</li>
                            <li>Usage of improper or insufficient fuel, including lubricants and other fluids.</li>
                            <li>Installation or usage of non-A-Thon genuine parts.</li>
                            <li>Usage of devices or accessories not supplied or approved by A-Thon.</li>
                            <li>Unauthorized modifications, alterations, tampering, or improper repairs.</li>
                            <li>Usage of parts in applications for which they were not designed or approved by A-Thon.</li>
                            <li>Minor irregularities such as slight noise or vibrations or features inherent to the vehicle’s design that do not affect functionality or quality.</li>
                            <li>Environmental factors such as airborne contaminants, industrial fallout, fire, earthquake, or natural calamities, including any Acts of God.</li>
                            <li>Racing or off-road misuse beyond designed capacity, overloading the vehicle, or damage caused by accidents or collisions.</li>
                            <li>Paint damage, including scratches, dents, or other body damage.</li>
                            <li>Damage caused by road elements such as sand, gravel, dust, or debris, including stone chipping of paint or glass.</li>
                        </ul>
                    </li>
                    <li><strong>Incidental or Consequential Damages</strong>
                        <ul>
                            <li>Loss of time, inconvenience, loss of vehicle use, or any commercial losses.</li>
                        </ul>
                    </li>
                    <li><strong>Specific Component Warranties</strong>
                        <ul>
                            <li>Batteries, audio systems, tires, and tubes originally installed on A-Thon vehicles are warranted directly by their respective manufacturers and not by A-Thon.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>General Warranty Terms:</strong></p>
                <ul>
                    <li>This warranty constitutes the entire warranty provided by A-Thon. No dealer, agent, or employee is authorized to modify, extend, or enlarge this warranty or to make any oral warranty on behalf of A-Thon.</li>
                    <li>A-Thon reserves the right to make design changes or improvements to the vehicle at any time without any obligation to implement the same changes on previously sold vehicles.</li>
                    <li>Warranty services will be provided exclusively by A-Thon-authorized dealers and Dealer Service Branches.</li>
                    <li>All warranty decisions made by A-Thon are final and binding on the vehicle owner. A-Thon reserves the sole authority to make the final decision on any warranty-related matter.</li>
                </ul>
                <p><strong>Owner’s Responsibilities:</strong></p>
                <ul>
                    <li><strong>Proper Use, Maintenance, and Care</strong>
                        <ul>
                            <li>The vehicle must be used, maintained, and cared for in compliance with the instructions provided in the Owner’s Manual and Service Booklet.</li>
                            <li>For vehicles subjected to severe operating conditions, such as extremely dusty or rough environments, frequent short-distance travel, or heavy city traffic in hot weather, maintenance should be performed more frequently, as recommended in the Owner’s Manual and Service Booklet.</li>
                        </ul>
                    </li>
                    <li><strong>Servicing at Authorized Facilities</strong>
                        <ul>
                            <li>To maintain this warranty, the vehicle must be serviced exclusively by A-Thon Authorized Dealers or Service Centers, in strict accordance with the guidelines outlined in the Owner’s Manual and Service Booklet.</li>
                        </ul>
                    </li>
                    <li><strong>Retention of Maintenance Records</strong>
                        <ul>
                            <li>It is the owner’s responsibility to retain records of all maintenance services performed. These records may be required to demonstrate compliance with the maintenance schedule as specified in the Owner’s Manual and Service Booklet.</li>
                        </ul>
                    </li>
                    <li><strong>Presentation of Vehicle for Warranty Service</strong>
                        <ul>
                            <li>The vehicle, along with the Owner’s Manual and Service Booklet, must be presented during regular service business hours to any A-Thon Authorized Dealer or Service Center to obtain warranty service.</li>
                        </ul>
                    </li>
                    <li><strong>Jurisdiction for Disputes</strong>
                        <ul>
                            <li>Any disputes arising in connection with this Basic Warranty shall be subject to the exclusive jurisdiction of the courts located in Bangalore.</li>
                            <li>Any dispute arising out of or in connection with this Basic Warranty shall be amicably settled between the Parties. If the Parties are unable to resolve the matter amicably, the same shall be referred to arbitration, conducted by a sole arbitrator mutually appointed by the Parties in accordance with the Arbitration and Conciliation Act, 1996. The venue and seat of arbitration shall be Bangalore City.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Customer Maintenance:</strong></p>
                <p>Ensure your vehicle remains in excellent condition for years to come by following the recommended maintenance schedule. Routine inspections help preserve your vehicle’s performance and longevity. Refer to the Owner's Manual for comprehensive details.</p>
                <p>By adhering to scheduled maintenance, you can optimize your car's condition and extend its lifespan. Check the A-Thon Price List below for maintenance services and specific items. For further information, consult your Owner's Manual.</p>
            </Container>
            </>
        )}
        </React.Fragment>
    )
}

export default Warranty_policy