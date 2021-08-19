import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BoxItem from '../BoxItem/BoxItem';
import './hot.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SkeMain from '../../skeleton/SkeMain';

const option = {
    loop: true,
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

function HotItems(props) {
    const { clickBuy } = props

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setInterval(() => {
            const url = 'http://localhost:3000/movie'
            const fetch = async () => {
                const res = await axios(url)
                setData(res.data)
            }
            fetch()
        }, 2000);
    }, [])



    return (
        <section>
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <div className="hot-items-wrapper">
                    <OwlCarousel className='owl-theme' items="5" autoplay={true} {...option}>
                        {
                            data.map(item => (
                                <BoxItem key={item.id} item={item} clickBuy={clickBuy} />
                            ))
                        }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}

export default HotItems;