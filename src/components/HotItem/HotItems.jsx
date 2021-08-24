import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BoxItem from '../BoxItem/BoxItem';
import './hot.css';

import SkeMain from '../../skeleton/SkeMain';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


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

    console.log(data);


    const option = {
        type: 'loop',
        autoplay: true,
        perPage: 5,
        width: '100%',
        gap: '1rem',
        pagination: false,
        breakpoints: {
            '1180': {
                perPage: 4,
                gap: '1rem',
            },
            '1000': {
                perPage: 3,
                gap: '1rem',
            },
            '800': {
                perPage: 2,
                gap: '1rem',
            },
            '640': {
                perPage: 2,
                gap: '1rem',
            },
            '480': {
                perPage: 1,
                gap: '1rem',
            }
        }
    }

    return (
        <section>
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <div className="hot-items-wrapper">
                    <Splide options={option}>
                        {
                            data.map((item, index) => (
                                <SplideSlide key={index} >
                                    <BoxItem item={item} clickBuy={clickBuy} />
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
            </div>
        </section>
    );
}

export default HotItems;