import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

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

    const settings = {
        type: 'loop',
        autoplay: true,
        rewind: true,
        slidesToShow: 6,
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
                <Slider {...settings} className='slider-box'>
                    {
                        data.map((item, index) => (
                            <Render item={item} clickBuy={clickBuy} />
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
}

export default Cartoon;
