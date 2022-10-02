import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function Render(props) {
    const { item, clickBuy } = props
    const [like, setLike] = useState(false)

    const liked = () => {
        setLike(!like)
    }


    return (
        < div className="hot-items mg-top">
            <img src={item.image}
                alt="" />
            <div className="movie-items-content">
                <a href={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="movie-items-title">
                    {item.name}
                </a>
                <div className="item-content-action">
                    <div className="item-content-like movie-info" onClick={liked}>
                        {
                            like ? <><i className='bx bx-check'></i>Liked</> : <><i className='bx bx-like'></i>Like</>
                        }
                    </div>
                    <div className="item-content-ticket movie-info" onClick={() => clickBuy(item, 1)}>
                        <i className='bx bx-sticker'></i>Buy Ticket
                    </div>
                </div>
            </div>
        </div >
    )
}





function Cartoon(props) {


    const { clickBuy } = props
    const [data, setData] = useState([])

    const option = {
        type: 'loop',
        autoplay: true,
        gap: '32px',
        perPage: 6,
        pagination: false,
        breakpoints: {
            '1400': {
                perPage: 5,
                gap: '16px',
            },
            '1280': {
                perPage: 5,
                gap: '16px',
            },
            '1200': {
                perPage: 4,
                gap: '16px',
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

    useEffect(() => {
        const url = 'https://json-server-anime.herokuapp.com/categories/1/animes'
        const fetch = async () => {
            const res = await axios(url)
            setData(res.data.sort((a, b) => 0.5 - Math.random()))
        }
        fetch()
    }, [])



    return (
        <section className="wow fadeIn">
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <Splide options={option} className='slider-box'>
                    {
                        data.map((item, index) => (
                            <SplideSlide key={index} >
                                <Render item={item} clickBuy={clickBuy} />
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </section>
    );
}

export default Cartoon;
