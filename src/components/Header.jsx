import React, { useState } from 'react';
import Form from '../containers/page/Form';
import { useAuth } from '../context/AuthorProvider';

function Header() {

    const { user, logout } = useAuth()

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    return (
        <>
            <header className="wow fadeIn">
                <a href="/" className="logo">
                    K-Movie<i className='bx bxl-youtube'></i>
                </a>

                <ul className="nav">
                    <li className="nav-hover-main">
                        <a href="/anime">Anime</a>
                        <div className="nav-visible">
                            <div className="row width-row">
                                <div className="col-3 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/anime/action">Hành động</a></li>
                                            <li><a href="/anime/fiction">Viễn tưởng</a></li>
                                            <li><a href="/anime/romance">Lãng mạn</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/anime/horror">Kinh dị</a></li>
                                            <li><a href="/anime/comedy">Hài hước</a></li>
                                            <li><a href="/anime/school">Trường học</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/anime/music">Âm nhạc</a></li>
                                            <li><a href="/anime/adventure">Phiêu lưu</a></li>
                                            <li><a href="/anime/supernatural">Siêu nhiên</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/anime/life">Đời thường</a></li>
                                            <li><a href="/anime/thrilling">Kịch tính</a></li>
                                            <li><a href="/manga">Truyện</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-hover-main">
                        <a href="/anime">Movie</a>
                        <div className="nav-visible">
                            <div className="row width-row-second">
                                <div className="col-4 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/movie/hot">Phim Hot</a></li>
                                            <li><a href="/movie/coming">Sắp chiếu</a></li>
                                            <li><a href="/movie/action">Hành động</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/movie/romance">Lãng mạn</a></li>
                                            <li><a href="/movie/comedy">Hài hước</a></li>
                                            <li><a href="/movie/science">Khoa học</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/movie/horror">Kinh dị</a></li>
                                            <li><a href="/movie/fiction">Viễn tưởng</a></li>
                                            <li><a href="/movie/show">TV Show</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a className="nav-hover" href="/blog">API</a></li>
                    <li><a className="nav-hover" href="/rank">BXH</a></li>
                    <li><a className="nav-hover" href="/baocao">Báo cáo</a></li>
                </ul>
                <div className="nav-search">
                    <input type="text" className="search-input" placeholder="Search" />
                    <span><i className='bx bx-search'></i></span>
                </div>
                <div className="action">
                    {
                        user ?
                            <>
                                <div className="action-cart">
                                    <i className='bx bx-cart'></i>
                                    <a href="/cart" className="btn btn-login cart">Giỏ hàng</a>
                                </div>
                            </> : null
                    }
                    <div className="action-user">
                        {
                            user ?
                                <>
                                    <i className='bx bx-user icon-user'></i>
                                    <div className="btn btn-login user">Kei
                                        <div className="dropdown-user">
                                            <ul>
                                                <li><i className='bx bx-user'></i><a href="/user">Trang cá nhân</a></li>
                                                <li><i className='bx bx-edit'></i><a href="">Sửa thông tin</a></li>
                                                <li><i className='bx bxs-lock-open' ></i><a href="">Đổi mật khẩu</a></li>
                                            </ul>
                                            <ul>
                                                <li><i className='bx bx-movie' ></i><a href="">Phim đã xem</a></li>
                                                <li><i className='bx bxs-heart' ></i><a href="">Phim yêu thích</a></li>
                                                <li><i className='bx bxs-bell' ></i><a href="">Phim đang theo dõi</a></li>
                                            </ul>
                                            <ul>
                                                <li><i className='bx bx-diamond'></i><a href="">Nâng cấp VIP</a></li>
                                                <li><i className='bx bx-money' ></i><a href="">Nạp thêm KGEM (0)</a></li>
                                                <li><i className='bx bx-history' ></i><a href="">Lịch sử giao dịch</a></li>
                                            </ul>
                                            <ul>
                                                <li><i className='bx bx-log-out'></i><a href="" onClick={logout}>Đăng xuất</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <i className='bx bx-user icon-user'></i>
                                    <div className="btn btn-login user" onClick={handleActive}>Đăng nhập</div>
                                </>
                        }
                    </div>
                </div>
            </header>
            <Form active={active} handleActive={handleActive} />
        </>
    );
}

export default Header;