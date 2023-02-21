import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeType from "../../../skeleton/SkeType";
import "./type.css";
import { Link } from "react-router-dom";

const Render = (props) => {
    const { item } = props;
    return (
        <div className="col-3 col-md-4 col-sm-6 blog-mg mg-top">
            <div className="video-item type-item">
                <img src={item.thumbnail} alt="" />
                <div className="video-play">
                    <i className="bx bx-play-circle"></i>
                    <span className="time"></span>
                </div>
                <Link to={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="video-content">
                    {item.name}
                </Link>
            </div>
        </div>
    );
};

function Type({ match, props }) {
    console.log(match);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const path = match.params.category;
    const type = match.params.type;

    useEffect(() => {
        setLoading(true);
        setTimeout(async () => {
            const url = `https://tender-overshirt-colt.cyclic.app/categories/${path}/animes?type=${type}`;
            const res = await axios(url);
            setData(res.data);
            setLoading(false);
            console.log(url);
        }, 1500);
    }, [path, type]);

    return (
        <section>
            <div className="container">
                <div className="path">
                    <i className="bx bxs-home"></i>
                    <i className="bx bx-chevron-right"></i>
                    <span>{match.params.category}</span>
                    <i className="bx bx-chevron-right"></i>
                    <span>{match.params.type}</span>
                </div>
                <div className="title-movie">
                    <h3 className="title">Nội dung</h3>
                </div>
                <div className="video">
                    <div className="row wow fadeIn">{loading ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <SkeType key={item} />) : data.map((item) => <Render item={item} key={item.id} />)}</div>
                </div>
            </div>
        </section>
    );
}

export default Type;
