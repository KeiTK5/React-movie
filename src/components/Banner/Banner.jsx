import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import './banner.css'
import banner from '../../assets/json/banner.json'

function RenderImg(props) {
    const { item } = props
    return (
        <div className="hero-slider" >
            <img src={item.image} alt="" />
            <div className="hero-slide-content">
                <div className="item-content-wrapper">
                    <div className="item-content-title top-down">
                        {item.name}
                    </div>
                    <div className="item-content-infos top-down delay-2">
                        <div className="item-content-info movie-info">
                            <span>HD+</span>
                        </div>
                        <div className="item-content-rate movie-info">
                            <i className='bx bxs-star'></i>9.5
                        </div>
                        <div className="item-content-time movie-info">
                            <i className='bx bx-time'></i>{item.time}
                        </div>
                    </div>

                    <div className="item-content-description top-down delay-4">
                        <span>{item.description}</span>
                    </div>

                    <div className="items-action top-down delay-6">
                        <a href="/" className="btn btn-hover">
                            <i className="bx bxs-right-arrow"></i>
                            <span>Watch now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Banner(props) {
    return (
        <div className="banner wow fadeIn" id="hero-slide">
            <div className="hero-selection">
                <div className="row" >
                    <div className="col-9 col-md-9">
                        <div className="hero-main owl-carousel" id="hero-selection">
                            <Splide options={{
                                type: 'fade',
                                rewind: true,
                                autoplay: true,
                                pagination: false,
                                arrows: false,
                                rewindSpeed: 1000,
                                speed: 1000
                            }}
                            >
                                {
                                    banner.map((item, index) => (
                                        <SplideSlide key={index}>
                                            <RenderImg item={item} />
                                        </SplideSlide>
                                    ))
                                }
                            </Splide>
                        </div>
                    </div>
                    <div className="col-3 col-md-3">
                        <div className="hero-sub" id="hero-selection-sub">
                            <Splide options={{
                                direction: 'ttb',
                                type: 'loop',
                                autoplay: true,
                                height: '100%',
                                gap: '1rem',
                                perPage: 3,
                                pagination: false,
                                arrows: false
                            }}
                            >
                                {
                                    banner.map((item, index) => (
                                        <SplideSlide key={index}>
                                            <div className="hero-sub-image" key={index} >
                                                <img src={item.image} alt="" />
                                            </div>
                                        </SplideSlide>
                                    ))
                                }
                            </Splide>
                            {/* {
                                banner.map((item, index) => (
                                    item.display ?
                                        <div className="hero-sub-image" key={index} >
                                            <img src={item.image} alt="" />
                                        </div> : ''
                                ))
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;