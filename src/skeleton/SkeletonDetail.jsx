import React from 'react';
import './skedetail.css'
function SkeletonDetail(props) {
    return (
        <div className="ske-item">
            <div className="row">
                <div className="col-3 col-md-5 col-sm-12">
                    <div className="ske-item-image">
                        {/* <img src={movie.image} alt="" /> */}
                    </div>
                </div>
                <div className="col-7 col-md-7 col-sm-12 item-description">
                    <h3 className="ske-movie-name"></h3>
                    <div className="ske-description">
                        <div className="ske-description-author flx">
                            {/* <h5 className="author-title">Tác giả: </h5> */}
                            {/* <span className="author-main">{movie.author}</span> */}
                        </div>
                        <div className="ske-description-cast flx">
                            {/* <h5 className="author-title">Diễn viên: </h5> */}
                            {/* <span className="author-main">{movie.cast}</span> */}
                        </div>
                        <div className="ske-description-category flx">
                            {/* <h5 className="author-title">Thể loại: </h5> */}
                            {/* <span className="author-main">{movie.category}</span> */}
                        </div>
                        <div className="ske-description-premiere flx">
                            {/* <h5 className="author-title">Công chiếu: </h5>
                            <span className="author-main">{movie.premiere}</span> */}
                        </div>
                        <div className="ske-description-time flx">
                            {/* <h5 className="author-title">Thời gian: </h5>
                            <span className="author-main">{movie.time}</span> */}
                        </div>
                        <div className="ske-description-language flx">
                            {/* <h5 className="author-title">Ngôn ngữ: </h5>
                            <span className="author-main">{movie.language}</span> */}
                        </div>
                        <div className="ske-description-order flx" >
                            {/* <span className="author-main" onClick={liked}>
                                {
                                    like ? <><i className='bx bx-check'></i>Liked</> : <> <i className='bx bx-like'></i>Like</>
                                }
                            </span>
                            <span className="author-main" onClick={() => clickBuy(movie.name)}><i className='bx bx-sticker' ></i>Đặt vé</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 describe">
                    <div className="describe-trailer">
                        <h3 className="title">Giới thiệu</h3>
                    </div>
                    <div className="ske-describe-movie">
                        {/* {movie.description} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonDetail;