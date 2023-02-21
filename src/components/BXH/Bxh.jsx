import axios from "axios";
import React, { useEffect, useState } from 'react';
import './bxh.css';
import { Link } from 'react-router-dom'
function ComingSoon(props) {
    const { item } = props
    return (
        <div className="col-3 col-md-4 col-sm-6 blog-mg mg-top">
            <div className="item-coming">
                <img src={item.image} alt="" />
                <span className="premiere">
                    {item.premiere}
                </span>
                <Link to={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="name-coming">
                    {item.name}
                </Link>
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
                        <Link to={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="name-rank">{item.name}</Link>
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
            const url = 'https://tender-overshirt-colt.cyclic.app/categories/1/animes?_sort=view&_order=desc'
            const res = await axios(url)
            setBxh(res.data.slice(0, 10))
            setLoading(false)
        }, 1000);
    }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(async () => {
            const url = 'https://tender-overshirt-colt.cyclic.app/categories/4/animes'
            const res = await axios(url)
            setComing(res.data)
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-9 col-md-12">
                        <h3 className="title">{props.title}</h3>
                        <div className="row">
                            {
                                coming.map(item => (
                                    <ComingSoon item={item} key={item.id} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-3 col-md-12 rank">
                        <h3 className="title">{props.title2}</h3>
                        <div className="rank mg-top">
                            {
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