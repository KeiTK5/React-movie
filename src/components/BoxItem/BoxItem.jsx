import React, { useEffect, useState } from 'react';
const arr = []
function BoxItem(props) {
    const { item, clickBuy } = props
    const [like, setLike] = useState(false)


    // yêu thích
    const liked = () => {
        setLike(!like)
    }

    return (
        <div className="hot-items mg-top">
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
                        <i className='bx bx-sticker'></i>Đặt vé
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxItem;