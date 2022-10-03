import Slider from "react-slick";
import React, { useState } from 'react';
import banner from '../../assets/json/banner.json';
import './banner.css';

function RenderImg(props) {
    const { item, isWatch } = props
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
                            <span><i class='bx bx-movie'></i>HD+</span>
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
                        <a href="#watch" className="btn btn-hover" onClick={isWatch}>
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

    const [watch, setWatch] = useState(false)

    const isWatch = () => {
        setWatch(!watch)
    }

    const settings = {
        fade: true,
        rewind: true,
        autoplay: true,
        pagination: false,
        arrows: false,
        rewindSpeed: 1000,
        speed: 1000
    }
    return (
        <div className="banner wow fadeIn" id="hero-slide">
            <div className="hero-selection">
                <div className="row" >
                    <div className="col-12 col-md-12">
                        <div className="hero-main" id="hero-selection">
                            <Slider {...settings}
                            >
                                {
                                    banner.map((item, index) => (
                                        <RenderImg item={item} isWatch={isWatch} watch={watch} />
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {
                watch ?
                    <div id="watch">
                        <i className='bx bx-x' onClick={isWatch}></i>
                        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/ATJYac_dORw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default Banner;