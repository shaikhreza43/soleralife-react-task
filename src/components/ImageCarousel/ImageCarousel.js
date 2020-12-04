import React, { useState } from 'react';
import { Card } from 'reactstrap';
import './ImageCarousel.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageCarousel = (props) => {

    return (

            <AwesomeSlider play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}>
                <div data-src="https://images.unsplash.com/photo-1543348750-466b55f32f16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" />
                <div data-src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" />
                <div data-src="https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            </AwesomeSlider>
    )
}

export default ImageCarousel;