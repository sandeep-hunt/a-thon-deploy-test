import React, {useState, useEffect} from 'react'
import Header1 from '../components/Header1'
import { Container } from 'react-bootstrap'
import Preloader from '../components/Preloader'
import StickyCont from '../components/StickyCont'

const Terms = () => {
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
                <h4 className='text-center'>Privacy and Policy</h4>
                <p>Last updated December 03, 2024 </p>
                <p>Your privacy is of utmost importance to us. This Privacy Notice for A-Thon Allterrain Private Limited (doing business as A-Thon) ('we', 'us', ‘A-Thon’ or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our product & services ('product and Services'), including when you: </p>
                <p>Visit our website at www.a-thonallterrain.com, that links to this Privacy Notice. This Privacy Policy applies to the main website, www.a-thonallterrain.com, as well as to the sub-domains such as a-thon.com, a-thon.co.in, and a-thon.in (collectively referred to as "microsites"). Please be aware that these websites may contain links to third-party/co-branded websites with different privacy practices. If you provide personal data to any third-party/co-branded sites, their privacy policies will govern the handling of your information.</p>
                <p>We are dedicated to ensuring the security of your personal data and want you to feel confident that your privacy is a priority. This Privacy Policy describes our practices concerning the collection, use, and protection of your information.</p>
                <strong>Engage with us in other related ways, including any sales, marketing, or events </strong>
                <p><strong>Questions or concerns? </strong>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Product and services.</p>
                <p><strong>SUMMARY OF KEY POINTS </strong></p>
                <p><strong><i>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</i></strong></p>
                <p><strong>What personal information do we process? </strong>When you visit, use, or navigate our products and Services, we may process personal information depending on how you interact with us and the product and Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us. </p>
                <p><strong>Do we process any sensitive personal information? ? </strong>Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about sensitive information we process. </p>
                <p><strong>Do we collect any information from third parties?  </strong>We may collect information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources. </p>
                <p><strong>How do we process your information?  </strong>We process your information to provide, improve, and administer our product and Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information. </p>
                <p><strong>In what situations and with which parties do we share personal information? </strong>We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.</p>
                <p><strong>How do we keep your information safe? </strong>We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.</p>
                <p><strong>What are your rights? </strong>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <strong>Learn more about your privacy rights.</strong></p>
                <p><strong>How do you exercise your rights? </strong>The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.<br />
                    Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.
                </p>
                <strong>TABLE OF CONTENTS</strong>
                <ol>
                    <li>WHAT INFORMATION DO WE COLLECT?</li>
                    <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                    <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONALINFORMATION?</li>
                    <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                    <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                    <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                    <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                    <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                    <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                    <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                    <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                    <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                    <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WECOLLECT FROM YOU?</li>
                </ol>
                <p><strong>1.	WHAT INFORMATION DO WE COLLECT?</strong></p>
                <p><strong>Personal information you disclose to us</strong></p>
                <p><i><strong>In Short: </strong>We collect personal information that you provide to us.</i></p>
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the product and Services, or otherwise when you contact us.</p>
                <p><strong>Personal Information Provided by You. </strong>The personal information that we collect depends on the context of your interactions with us and the product and Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                <ul>
                    <li>names</li>
                    <li>phone numbers</li>
                    <li>email addresses</li>
                    <li>mailing addresses</li>
                    <li>job titles </li>
                    <li>usernames</li>
                    <li>passwords</li>
                    <li>contact preferences</li>
                    <li>contact or authentication data</li>
                    <li>billing addresses</li>
                    <li>debit/credit card numbers</li>
                </ul>
                <p><strong>Sensitive Information. </strong>When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
                <ul>
                    <li>Government identifiers like PAN, aadhaar, Driving License etc.</li>
                </ul>
                <p><strong>Social Media Login Data. </strong>We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called '<strong>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong>' below.</p>
                <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                <strong>Information automatically collected</strong>
                <p><i><strong>In Short: </strong>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our product and Services.</i></p>
                <p>We automatically collect certain information when you visit, use, or navigate the product and Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, location, information about how and when you use our products and Services, and other technical information. This information is primarily needed to maintain the security and operation of our Product and services, and for our internal analytics and reporting purposes.</p>
                <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                <p><strong>The information we collect includes:</strong></p>
                <ul>
                    <li><strong><i>Log and Usage Data. </i></strong>Log and usage data is product and service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Product and services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Product and services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</li>
                    <li><strong><i>Device Data. </i></strong>We collect device data such as information about your computer, phone, tablet, or other device you use to access the Product and services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                    <li><strong><i>Location Data. </i></strong>We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Product and services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Product and services.</li>
                </ul>
                <p><strong>Google API</strong></p>
                <p>Our use of information received from Google APIs will adhere to <strong>Google API Services User Data Policy, including the Limited Use requirements.</strong></p>
                <p><strong>Information collected from other sources</strong></p>
                <p><i><strong>In Short: </strong>We may collect limited data from public databases, marketing partners, social media platforms, and other outside sources.</i></p>
                <p>In order to enhance our ability to provide relevant marketing, offers, product and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, social media platforms, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behaviour data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.</p>
                <p>If you interact with us on a social media platform using your social media account (e.g. Facebook or X), we receive personal information about you from such platforms such as your name, email address, and gender. You may have the right to withdraw your consent to processing your personal information. Learn more about withdrawing your consent. Any personal information that we collect from your social media account depends on your social media account's privacy settings. Please note that their own use of your information is not governed by this Privacy Notice.</p>
                <p><strong>2.	HOW DO WE PROCESS YOUR INFORMATION?</strong></p>
                <p><strong>In Short: </strong>We process your information to provide, improve, and administer our Product and services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. </p>
                <p>We process your personal information for a variety of reasons, depending on how you interact with our Product and services, including:</p>
                <ul>
                    <li>To deliver and facilitate delivery of products and services to the user. We may process your information to provide you with the requested product and service.</li>
                    <li>To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested product and service.</li>
                    <li>To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                    <li>To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services for our products and services.</li>
                    <li>To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
                    <li>To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our products.</li>
                    <li>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see '<a href="#privacy-rights">WHAT ARE YOUR PRIVACY RIGHTS?</a>' below.</li>
                    <li>To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.</li>
                    <li>To post testimonials. We post testimonials on our Product and services that may contain personal information.</li>
                    <li>To protect our Product and services. We may process your information as part of our efforts to keep our Product and services safe and secure, including fraud monitoring and prevention.</li>
                    <li>To evaluate and improve our Services, products, marketing, and your experience. We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
                    <li>To identify usage trends. We may process information about how you use our Product and services to better understand how they are being used so we can improve them.</li>
                    <li>To determine the effectiveness of our marketing and promotional campaigns. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</li>
                    <li>To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li>
                </ul>
                <p><strong>3.	WHEN AND WITH WHOM DO WE SHARE YOURPERSONAL INFORMATION?</strong></p>
                <p><i><strong>In Short: </strong>We may share information in specific situations described in this section and/or with the following third parties</i></p>
                <p><strong>Vendors, Consultants, and Other Third-Party Service Providers. </strong>We may share your data with third-party vendors, service providers, contractors, or agents ('third parties') who perform services for us or on our behalf and require access to such information to do that work.</p>
                <p>The third parties we may share personal information with are as follows:</p>
                <ul>
                    <li><strong>Data Backup and Security</strong>
                        <p>Google Drive Backup and Dropbox Backup etc.,</p></li>
                    <li><strong>User Commenting and Forums</strong>
                        <p>Social Media Comments and Tag Manager etc.,</p></li>
                </ul>
                <p>We also may need to share your personal information in the following situations:</p>
                <ul>
                    <li><strong>Business Transfers. </strong>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    <li><strong>When we use Google Maps Platform APIs. </strong>We may share your information with certain Google Maps Platform APIs (e.g. Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise. We obtain and store on your device ('cache') your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.</li>
                </ul>
                <p><strong>DO WE USE COOKIES AND OTHER TRACKINGTECHNOLOGIES?</strong></p>
                <p><i><strong>In Short: </strong>We may use cookies and other tracking technologies to collect and store your information.</i></p>
                <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Product and services. Some online tracking technologies help us maintain the security of our Product and services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
                <p>We also permit third parties and service providers to use online tracking technologies on our Product and services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Product and services or on other websites.</p>
                <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
                <p><strong>Analytics</strong></p>
                <p>We may share your information with Google Analytics to track and analyse the use of the Product and services. To opt out of being tracked by Google Analytics across the Services, visit <strong>https://tools.google.com/dlpage/gaoptout.</strong> For more information on the privacy practices of Google, please visit the <strong>Google Privacy & Terms page.</strong></p>
                <p>Further we may use other Analytics to track and analyse the use of the Product and services. Privacy practices of such analytics service providers shall be applicable and for more information on the privacy practices of such service providers, please visit such service providers’ website, if any.</p>
                <p><strong>5.	HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong></p>
                <p><i><strong>In Short: </strong>If you choose to register or log in to our Product and services using a social media account, we may have access to certain information about you.</i></p>
                <p>Our Product and services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform(s).</p>
                <p>We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Product and services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
                <p><strong>6.	HOW LONG DO WE KEEP YOUR INFORMATION?</strong></p>
                <p><i><strong>In Short: </strong>We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</i></p>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
                <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                <p><strong>7.	HOW DO WE KEEP YOUR INFORMATION SAFE? </strong></p>
                <p><i><strong>In Short: </strong>We aim to protect your personal information through a system of organisational and technical security measures.</i></p>
                <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Product and services is at your own risk. You should only access the Product and services within a secure environment.</p>
                p
                <p><strong>8.	WHAT ARE YOUR PRIVACY RIGHTS?</strong></p>
                <p><i><strong>In Short: </strong>You may review, change, or terminate your account at any time, depending on applicable Indian state and Laws.</i></p>
                <p><strong>Withdrawing your consent: </strong>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section '<strong>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>' below.</p>
                <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                <p><strong>Opting out of marketing and promotional communications: </strong>You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below. You will then be removed from the marketing lists. However, we may still communicate with you —for example, to send you product and service-related messages that are necessary for the administration and use of your account, to respond to product and service requests, or for other non-marketing purposes.</p>
                <p><strong>Cookies and similar technologies: </strong>Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Product and services.</p>
                <p><strong>9.	CONTROLS FOR DO-NOT-TRACK FEATURES</strong></p>
                <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
                <p><strong>10.	DO WE MAKE UPDATES TO THIS NOTICE?</strong></p>
                <p><i><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</i></p>
                <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information. Please visit our website www.a-thonallterrain.com for the latest/updated policy.</p>
                <p><strong>11.	HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong></p>
                <p>If you have questions or comments about this notice, you may contact us by writing to<br/>_______ or post at:<br/>
                A-Thon Allterrain Private Limited<br/>
                __________<br/>
                __________<br/>
                India</p>
                <p><strong>12.	HOW CAN YOU REVIEW, UPDATE, OR DELETETHE DATA WE COLLECT FROM YOU?</strong></p>
                <p>Based on the applicable laws of India, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
            </Container>
            </>
        )}
        </React.Fragment>
    )
}

export default Terms