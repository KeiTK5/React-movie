import axios from "axios";
import React, { useEffect, useState } from 'react';
import SkeletenRank from "../../skeleton/SkeletenRank";
import Skeleton from '../../skeleton/Skeleton';

import './bxh.css';

function ComingSoon(props) {
    const { item } = props
    return (
        <div className="col-4 col-md-4 col-sm-6 blog-mg mg-top">
            <div className="item-coming">
                <img src={item.image} alt="" />
                <span className="premiere">
                    {item.premiere}
                </span>
                <a href={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="name-coming">
                    {item.name}
                </a>
            </div>
        </div>
    )
}

function Rank({ item }) {
    return (
        <div className="item-rank-wrapper">
            {
                <div className="item-rank">
                    <div className="image-rank">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="content-rank">
                        <a href={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="name-rank">{item.name}</a>
                        <span className="view-rank"></span>
                    </div>
                    <div className="number-rank">
                        <span className="number">
                            {item.view}
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

function Bxh(props) {
    const [bxh, setBxh] = useState([])
    const [coming, setComing] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(async () => {
            const url = 'https://json-server-anime.herokuapp.com/categories/1/animes?_sort=view&_order=desc'
            const res = await axios(url)
            setBxh(res.data.slice(0, 7))
            setLoading(false)
        }, 3500);
    }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(async () => {
            const url = 'https://json-server-anime.herokuapp.com/categories/4/animes'
            const res = await axios(url)
            setComing(res.data)
            setLoading(false)
        }, 3500);
    }, [])

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-9 col-md-12">
                        <h3 className="title">{props.title}</h3>
                        <div className="row">
                            {
                                loading ? [1, 2, 3, 4, 5, 6].map(item => <Skeleton key={item} />) :
                                    coming && coming.map(item => (
                                        <ComingSoon item={item} key={item.id} />
                                    ))
                            }

                        </div>
                    </div>
                    <div className="col-3 col-md-12">
                        <h3 className="title">{props.title2}</h3>
                        <div className="rank mg-top">
                            {
                                loading ? [1, 2, 3, 4, 5, 6, 7].map(item => <SkeletenRank key={item} />) :
                                    bxh.map(item => (
                                        <Rank item={item} key={item.id} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bxh;