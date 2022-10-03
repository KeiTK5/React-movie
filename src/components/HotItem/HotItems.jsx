import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BoxItem from '../BoxItem/BoxItem';
import './hot.css';
import Slider from "react-slick";



function HotItems(props) {
    const { clickBuy } = props

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const url = 'https://json-server-anime.herokuapp.com/categories/2/animes'
        const fetch = async () => {
            const res = await axios(url)
            setData(res.data.sort((a, b) => 0.5 - Math.random()).slice(0, 10))
        }
        fetch()
    }, [])



    const settings = {
        type: 'loop',
        autoplay: true,
        rewind: true,
        slidesToShow: 6,
        width: '100%',
        pagination: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    }

    return (
        <section>
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <Slider {...settings}>
                    {
                        data.map((item, index) => (
                            <BoxItem item={item} clickBuy={clickBuy} />
                        ))
                    }
                </Slider >
            </div>
        </section>
    );
}

export default HotItems;