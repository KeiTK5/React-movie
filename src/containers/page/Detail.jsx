import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SkeletonDetail from '../../skeleton/SkeletonDetail';
import Comment from './Comment';
import { useAuth } from '../../context/AuthorProvider'

import './detail.css';



const arr = []

function Render(props) {
    const { movie, like, liked, clickBuy } = props
    return (
        <div className="item" key={movie.id}>
            <div className="row">
                <div className="col-3 col-md-5 col-sm-12">
                    <div className="item-image">
                        <img src={movie.image} alt="" />
                    </div>
                </div>
                <div className="col-7 col-md-7 col-sm-12 item-description">
                    <h3 className="movie-name">{movie.name}</h3>
                    <div className="description">
                        <div className="description-author flx">
                            <h5 className="author-title">Tác giả: </h5>
                            <span className="author-main">{movie.author}</span>
                        </div>
                        <div className="description-cast flx">
                            <h5 className="author-title">Diễn viên: </h5>
                            <span className="author-main">{movie.cast}</span>
                        </div>
                        <div className="description-category flx">
                            <h5 className="author-title">Thể loại: </h5>
                            <span className="author-main">{movie.category}</span>
                        </div>
                        <div className="description-premiere flx">
                            <h5 className="author-title">Công chiếu: </h5>
                            <span className="author-main">{movie.premiere}</span>
                        </div>
                        <div className="description-time flx">
                            <h5 className="author-title">Thời gian: </h5>
                            <span className="author-main">{movie.time}</span>
                        </div>
                        <div className="description-language flx">
                            <h5 className="author-title">Ngôn ngữ: </h5>
                            <span className="author-main">{movie.language}</span>
                        </div>
                        <div className="description-order flx" >
                            <span className="author-main" onClick={liked}>
                                {
                                    like ? <><i className='bx bx-check'></i>Liked</> : <><i className='bx bx-like'></i>Like</>
                                }
                            </span>
                            <span className="author-main" onClick={() => clickBuy(1, movie)}>
                                <i className='bx bx-sticker' ></i>Đặt vé
                            </span>
                        </div>
                        <div className="description-language flx">
                            <h5 className="author-title">Giá: </h5>
                            <span className="author-main">{movie.price} VND</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 describe">
                    <div className="describe-trailer">
                        <h3 className="title">Giới thiệu</h3>
                    </div>
                    <span className="describe-movie">
                        {movie.description}
                    </span>
                </div>
            </div>
        </div >
    )
}

function Detail({ match, props }) {
    const { user } = useAuth()
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(false)
    const [buy, setBuy] = useState([])
    const [like, setLike] = useState(false)

    const idLog = match.params.category


    useEffect(() => {
        const url = `https://json-server-anime.herokuapp.com/categories/${idLog}/animes`
        setLoading(true)
        setTimeout(async () => {
            const res = await axios(url)
            setDetail(res.data.filter(item => item.name === match.params.name))
            setLoading(false)
        }, 1500);
    }, [])



    // lấy data
    useEffect(() => {
        const local = localStorage.getItem("object")
        if (local) {
            setBuy(JSON.parse(local) || arr)
        }
    }, [])

    // Lưu data
    useEffect(() => {
        localStorage.setItem('object', JSON.stringify(buy))
    }, [buy])

    // click buy
    const clickBuy = async (quantity, item) => {
        alert('Added to your ticket !')
        const url = 'https://json-server-anime.herokuapp.com/order'
        const obj = {
            user: user.email,
            name: item.name,
            price: item.price,
            author: item.author,
            image: item.image,
            categoryId: item.categoryId,
            premiere: item.premiere,
            time: item.time,
            language: item.language,
            quantity: quantity
        }
        await axios.post(url, obj)
    }


    const liked = () => {
        setLike(!like)
    }




    return (
        <section>
            <div className="container">
                <div className="path">
                    <i className='bx bxs-home'></i>
                    <i className='bx bx-chevron-right'></i>
                    <span>{match.params.category}</span>
                    <i className='bx bx-chevron-right'></i>
                    <span>{match.params.name}</span>
                </div>
                <div className="title-movie">
                    <h3 className="title">Nội dung</h3>
                </div>
                {
                    loading ? [1].map(item => (< SkeletonDetail key={item} />)) : detail.map(movie => (
                        <Render movie={movie} key={movie.id} like={like} liked={liked} clickBuy={clickBuy} />
                    ))
                }
                {
                    user ? <Comment match={match} /> : null
                }

            </div>

        </section>
    );
}

export default Detail;