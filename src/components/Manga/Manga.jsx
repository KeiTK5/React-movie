import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './manga.css'

function RenderManga(props) {
    const { item } = props
    return (
        <div className="col-2 col-md-4 col-sm-6 blog-mg item-manga mg-top">
            <img src={item.image} alt="" />
            <span className="chap">
                Chap: {item.chap}
            </span>
            <span className="name">
                {item.name}
            </span>
        </div>
    )
}

function Manga(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        const url = 'https://json-server-anime.herokuapp.com/categories/5/animes'
        const fetch = async () => {
            const res = await axios(url)
            setData(res.data)
        }
        fetch()
    }, [])

    const arr = data.slice(0, 6)

    return (
        <section>
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <div className="Manga">
                    <div className="row wow fadeIn">
                        {
                            arr.map(item => (
                                <RenderManga item={item} key={item.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Manga;