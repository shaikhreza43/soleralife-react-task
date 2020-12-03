import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link, TextField } from '@material-ui/core';
import { Col, Row, Container } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(1, 1),
        marginTop: 'auto',
        backgroundColor: 'black',
        color: 'white'
    },
    textMargin: {
        marginTop: '10px'
    },
    textField: {
        padding: '5px',
        width: '450px',
        outlineColor: 'white'
    },
    paragraph: {
        width: '450px',
        textAlign: 'justify'
    }
}));

const Footer = (props) => {
    const classes = useStyles();
    return (
        <>
            <Container fluid style={{ background: '#111111', color: 'white', padding: '30px' }}>
                <Row className="footer-main-div">
                    <Col lg={4}>
                        <div className="footer-inner-div-1st">
                            <span>
                                <input type="email" placeholder="Email Address" className={classes.textField} />
                                <p className={classes.paragraph}>
                                    Subscribe to receive communications about SoleraLife products,
                                    services, stores, events and matters of cultural interest.
                                </p>
                            </span>
                            <span>
                                <h5>Sustainability</h5>
                                <p className={classes.paragraph} style={{ marginTop: '10px' }}>
                                    All SoleraLife products are vegan, and we do not test our formulations or ingredients on animals.
                                    We are Leaping Bunny approved and a Certified B Corporation.
                                    Learn about our rinse and return programme
                        </p>
                            </span>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={2}>
                        <div className="footer-inner-div-2nd">
                            <span>
                                <h5>Orders & Support</h5>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Link href="#">Contact us</Link>
                                    <Link href="#">FAQs</Link>
                                    <Link href="#">Delivery & Returns</Link>
                                    <Link href="#">Terms & Conditions</Link>
                                </div>
                            </span>
                            <span>
                                <h5>About</h5>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Link href="#">Our Story</Link>
                                    <Link href="#">Foundation</Link>
                                    <Link href="#">Careers</Link>
                                    <Link href="#">Privacy & Policy</Link>
                                    <Link href="#">Accessibility</Link>
                                </div>
                            </span>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-inner-div-3nd">
                            <span>
                                <h5>Services</h5>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Link href="#">Live Assistants</Link>
                                    <Link href="#">Corporate Gifts</Link>
                                    <Link href="#">Facial Appointments</Link>
                                </div>
                            </span>
                            <span>
                                <h5>Social Media</h5>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Link href="#">Instagram</Link>
                                    <Link href="#">Twitter</Link>
                                    <Link href="#">Linkedin</Link>
                                </div>
                            </span>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-inner-div-4th">
                            <span>
                                <h5>Location preferences</h5>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Link href="#">Shipping: India</Link>
                                    <Link href="#">Language:EN</Link>
                                </div>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer className={classes.footer}>
                <p className={classes.textMargin}>&copy;SoleraLife</p>
            </footer>
        </>
    )
}

export default Footer;