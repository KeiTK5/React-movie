import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SkeType from '../../../skeleton/SkeType';

import './BXH.css'

const Render = (props) => {
    const { item } = props
    return (
        <div className="col-3 col-md-4 col-sm-6 blog-mg mg-top">
            <div className="video-item type-item">
                <img src={item.thumbnail} alt="" />
                <div className="video-play">
                    <i className='bx bx-play-circle'></i>
                    <span className="time"></span>
                </div>
                <a href={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="video-content">{item.name}</a>
            </div>
        </div>
    )
}

function BXH({ match, props }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(async () => {
            const url = `https://tender-overshirt-colt.cyclic.app/animes?_sort=view&_order=desc`;
            const res = await axios(url)
            setData(res.data)
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <section>
            <div className="container">
                <div className="path">
                    <i className='bx bxs-home'></i>
                    <i className='bx bx-chevron-right'></i>
                    <span>Bảng xếp hạng tuần này</span>
                </div>
                <div className="title-movie">
                    <h3 className="title">Nội dung</h3>
                </div>
                <div className="video">
                    <div className="row wow fadeIn">
                        {
                            // data.map(item => (
                            //     item.category === 'Video' ? <RenderVideo item={item} key={item.id} /> : null
                            // ))

                            loading ?
                                [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                                    <SkeType key={item} />
                                )) :
                                data.map(item => (
                                    <Render item={item} key={item.id} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BXH;