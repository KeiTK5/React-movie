import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';


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
                <a href={`/detail/${item.category}/${item.name}/${item.id}`} className="movie-items-title">
                    {item.name}
                </a>
                <div className="item-content-action">
                    <div className="item-content-like movie-info" onClick={liked}>
                        {
                            like ? <><i className='bx bx-check'></i>Liked</> : <><i className='bx bx-like'></i>Like</>
                        }
                    </div>
                    <div className="item-content-ticket movie-info" onClick={() => clickBuy(item.name)}>
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

    useEffect(() => {
        setInterval(() => {
            const url = 'http://localhost:3000/anime'
            const fetch = async () => {
                const res = await axios(url)
                setData(res.data)
            }
            fetch()
        }, 2000);
    }, [])

    const option = {
        dots: false,
        responsive: {
            500: {
                items: 2
            },
            850: {
                items: 3
            },
            1280: {
                items: 5
            }
        }
    };

    return (
        <section className="wow fadeIn">
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <OwlCarousel className='owl-theme' items="5"  {...option}>
                    {
                        data.map(item => (
                            <Render item={item} key={item.id} clickBuy={clickBuy} />
                        ))
                    }
                </OwlCarousel>
            </div>
        </section>
    );
}

export default Cartoon;
