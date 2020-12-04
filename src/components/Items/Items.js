import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import React, { useState } from 'react';
import item1_img from '../../assets/images/item1_image.jpg';
import { Link } from '@material-ui/core';
import Header from '../Header/Header';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const Items = (props) => {

    const [cartValue,setCartValue] = useState(0);

    return (
        <Container fluid>
            <Header cartValue={cartValue}></Header>
            <Row>
                <a href="#" style={{ position: 'absolute', left: '30px', marginTop: '100px', color: 'black', fontSize: '20px' }}>Soleralife</a>
                <img src={item1_img} alt="item1_img" className="img-responsive" style={{ width: '850px' }}></img>
                <Col lg={4}>
                    <div className="item1-description-main-div">
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <span className="item-desc-heading"><Link href="#">Body & Hand </Link>.&nbsp;</span> <span className="item-desc-heading"><Link href="#">Body</Link></span>
                        </div>

                        <h5> Lorem Ipsum random text</h5>
                        <p className="text-justify">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English.
                       </p>
                        <hr style={{ border: '1px solid black' }}></hr>
                        <h6>Skin Feel</h6>
                        <p style={{ fontSize: '14px' }}>Soft, smooth, refreshed</p>
                        <hr style={{ border: '1px solid #eee' }}></hr>
                        <h6>Aroma</h6>
                        <p style={{ fontSize: '14px' }}>Fresh, alpine, camphoric</p>
                        <hr style={{ border: '1px solid #eee' }}></hr>
                        <h6>Key Ingredients</h6>
                        <p style={{ fontSize: '14px' }}>Bamboo Stem, Sage Leaf, Pine Needle</p>

                        <Button color="secondary" onClick={()=>setCartValue(cartValue+1)}>Add to Cart - $250.00</Button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <img src="https://images.unsplash.com/photo-1580764194291-6288693ce463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></img>
                </Col>
                <Col lg={1}></Col>
                <Col lg={4} style={{ paddingTop: '5%' }}>
                    <div className="item2-description-main-div">
                        <p>How to Use</p>
                        <p>
                            Once or twice weekly, massage onto soaked skin from neck to toe, then rinse thoroughly.
                        </p>
                        <hr style={{ border: '1px solid black' }}></hr>
                        <h6>Dosage</h6>
                        <p style={{ fontSize: '14px' }}>Desired Amount</p>
                        <hr style={{ border: '1px solid #eee' }}></hr>
                        <h6>Texture</h6>
                        <p style={{ fontSize: '14px' }}>Opaque, fine-grain gel</p>
                    </div>
                </Col>
            </Row>

            <Row style={{marginBottom:'50px'}}>
                <ImageCarousel/>
            </Row>
        </Container>
    )
}

export default Items;