import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Preloader from '../components/Preloader'
import Header1 from '../components/Header1'

const Equal_opportunities = () => {
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
                    <Container className='mt-5 mb-5'>
                        <h4 className='text-center'>Equal Opportunities Statement</h4>
                        <div class="mt-4">
                            <strong>Equal Opportunities</strong>
                            <ul>
                                <li>We provide equal opportunities to all our employees and to all eligible applicants for employment in our company. We do not unfairly discriminate on any ground, including <strong>race, caste, religion, colour, ancestry, marital status, gender, sexual orientation, age, nationality, ethnic origin, disability</strong>, or any other category protected by applicable law.</li>
                                <li>When recruiting, developing, and promoting our employees, our decisions will be based solely on <strong>performance, merit, competence, and potential</strong>.</li>
                                <li>We shall have <strong>fair, transparent, and clear employee policies</strong> that promote diversity and equality, in accordance with applicable law. These policies shall provide for clear terms of employment, training, development, and performance management.</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Dignity and Respect</strong>
                            <ul>
                                <li>Our leaders shall be responsible for creating a conducive work environment built on tolerance, understanding, cooperation, and respect for individual privacy.</li>
                                <li>Everyone in our work environment must be treated with <strong>dignity and respect</strong>. We do not tolerate any form of harassment, whether <strong>sexual, physical, verbal, or psychological</strong>.</li>
                                <li>We have clear and fair disciplinary procedures, which necessarily include an employee’s right to be heard.</li>
                                <li>We respect our employees’ right to privacy. We have no concern with their conduct outside our work environment, unless such conduct impairs their work performance, creates conflicts of interest, or adversely affects our reputation or business interests.</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Statement</strong>
                            <p>A-THON is committed to providing equal opportunities in employment and creating an inclusive work environment. We endeavour to:</p>
                            <ul>
                                <li>Provide <strong>equal and fair opportunities</strong> for employment to all qualified applicants.</li>
                                <li>Maintain a work environment free from harassment based on <strong>age, colour, physical ability, marital status, parental status, ethnic origin, religion, sexual orientation, or gender identity</strong>.</li>
                                <li>Make employment relationship decisions solely on the basis of <strong>individual ability and qualifications</strong>, subject only to occupational requirements, seniority, and other appropriate non-discriminatory criteria.</li>
                                <li>Adhere to applicable law pertaining to <strong>equal employment opportunities and fair employment practices</strong>.</li>
                                <li>Inform staff of certain behaviours that are unacceptable, and measures that the Company may take for deviant behaviour towards employees.</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Non-Discrimination</strong>
                            <p>We shall not discriminate directly or indirectly against any employee or job applicant on any grounds, including <strong>age, color, physical ability, ethnic origin, nationality, religion, gender, family status, marital status, pre-natal status, gender re-assignment, or sexual orientation</strong>.</p>
                            <p>We will make <strong>reasonable accommodation</strong>, whenever necessary, for qualified employees or job applicants who have disabilities.</p>
                            <p><em>*Reasonable accommodation</em> means necessary and appropriate modification and adjustments, without imposing a disproportionate or undue burden, to ensure persons with disabilities enjoy rights equally with others.</p>
                        </div>
                        <div>
                            <strong>Bullying and Intimidation</strong>
                            <p>We promote a harmonious working environment in which our employees will be treated with <strong>dignity and respect</strong>. We have a <strong>zero-tolerance policy</strong> towards bullying and harassment.</p>
                        </div>
                        <div>
                            <strong>Commitment to Diversity and Inclusion</strong>
                            <p>We are committed to strengthening <strong>diversity and inclusion</strong> in the workplace through an enabling environment, supportive work-life policies, and a culture that welcomes differences and creates a sense of belonging. We strive to create a work environment where all employees can develop and grow to achieve their full potential. We are an equal opportunity employer and are committed to maintaining respect and dignity for all.</p>
                        </div>
                    </Container>
                </>
            )}
        </React.Fragment>
    )
}

export default Equal_opportunities