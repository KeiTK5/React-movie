import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './cart.css';


function RenderItem(props) {
    const { item, handleDelete } = props

    return (
        <div className="item-ticket">
            <div className="image-ticket">
                <img src={item.image} alt="" />
            </div>
            <div className="description-ticket">
                <div className="title-ticket flxs">
                    <h5 className="name-ticket">Name: </h5>
                    <a href={`/detail/${item.categoryId}/${item.name}/${item.id}`} className="detail-ticket">{item.name}</a>
                </div>
                <div className="title-ticket flxs">
                    <h5 className="name-ticket">Cinema: </h5>
                    <span className="detail-ticket">{item.name}</span>
                </div>
                <div className="title-ticket flxs">
                    <h5 className="name-ticket">Time: </h5>
                    <span className="detail-ticket">{item.time}</span>
                </div>
                <div className="title-ticket flxs">
                    <h5 className="name-ticket">Date: </h5>
                    <span className="detail-ticket">{item.date}</span>
                </div>
                <div className="title-ticket flxs">
                    <h5 className="name-ticket">Language: </h5>
                    <span className="detail-ticket">{item.language}</span>
                </div>
                <div className="title-ticket flxs">
                    <h5 className="name-ticket">Price: </h5>
                    <span className="detail-ticket">{item.price} VND</span>
                </div>
                <div className="title-ticket flxs">
                    <h5 className="name-ticket">Cancel: </h5>
                    <span className="detail-ticket" onClick={() => handleDelete(item.id)}><i className='bx bx-x'></i></span>
                </div>
            </div>
        </div>
    )
}

function Total(props) {
    const { cart, price } = props
    return (
        <div className="total-ticket">
            <div className="ticket-wrapper">
                <h3>Bạn đã đặt <span className="color-ticket">{cart.length}</span> vé</h3>
                <div className="total-price">
                    <h4>Tổng: <span className="color-ticket">{price}.000</span>VNĐ</h4>
                </div>
            </div>
        </div>
    )
}


function Cart({ match, props }) {
    const [cart, setCart] = useState([])

    const handleDelete = async (id) => {
        const url = `https://tender-overshirt-colt.cyclic.app/order/${id}`
        await axios.delete(url)
    }

    useEffect(() => {
        const url = 'https://tender-overshirt-colt.cyclic.app/order'
        const fetch = async () => {
            const res = await axios(url)
            setCart(res.data)
        }
        fetch()
    }, [cart])


    const map = cart.map((item) => parseInt(item.price))
    const reducer = (a, b) => a + b;
    const price = map.reduce(reducer, 0)



    return (
        <section>
            <div className="container">
                <div className="path">
                    <i className='bx bxs-home'></i>
                    <i className='bx bx-chevron-right'></i>
                    <span>Giỏ hàng</span>
                </div>
                <div className="title-cart mg-top">
                    <div className="row">
                        <div className="col-3 col-md-12">
                            <h3 className="title">Tài khoản K-Movies</h3>
                            <Total cart={cart} price={price} />
                        </div>
                        <div className="col-9 col-md-12">
                            <h3 className="title">Vé đã đặt</h3>
                            <div className="history-wrapper">
                                {
                                    cart.map(item => (
                                        <RenderItem item={item} key={item.id} handleDelete={handleDelete} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;