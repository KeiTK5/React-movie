import React, { useEffect, useState } from 'react';
import Form from '../containers/page/Form';
import { useAuth } from '../context/AuthorProvider';
import Search from './Search/Search';

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
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/1/action">Hành động</a></li>
                                            <li><a href="/1/fiction">Viễn tưởng</a></li>
                                            <li><a href="/1/romance">Lãng mạn</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/1/horror">Kinh dị</a></li>
                                            <li><a href="/1/comedy">Hài hước</a></li>
                                            <li><a href="/1/school">Trường học</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/1/music">Âm nhạc</a></li>
                                            <li><a href="/1/adventure">Phiêu lưu</a></li>
                                            <li><a href="/1/supernatural">Siêu nhiên</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/1/life">Đời thường</a></li>
                                            <li><a href="/1/thrilling">Kịch tính</a></li>
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
                                <div className="col-4 col-md-12 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/2/hot">Phim Hot</a></li>
                                            <li><a href="/2/coming">Sắp chiếu</a></li>
                                            <li><a href="/2/action">Hành động</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 col-md-12 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/2/romance">Lãng mạn</a></li>
                                            <li><a href="/2/comedy">Hài hước</a></li>
                                            <li><a href="/2/science">Khoa học</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 col-md-12 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><a href="/2/horror">Kinh dị</a></li>
                                            <li><a href="/2/fiction">Viễn tưởng</a></li>
                                            <li><a href="/2/show">TV Show</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a className="nav-hover" href="/rank">BXH</a></li>
                </ul>
                <Search />
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
                <div className="nav-mobile">
                    <div className="nav-mobile-header">
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </header>
            <Form active={active} handleActive={handleActive} />
        </>
    );
}

export default Header;