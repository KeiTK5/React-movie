import React, { useEffect, useState } from 'react';
import Form from '../containers/page/Form';
import { useAuth } from '../context/AuthorProvider';
import Search from './Search/Search';
import { Link } from 'react-router-dom'
function Header() {

    const { user, logout } = useAuth()

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    const openNav = () => {
        setOpen(!open)
    }

    return (
        <>
            <header className="wow fadeIn">
                <Link to="/" className="logo">
                    K-Movie<i className='bx bxl-youtube'></i>
                </Link>

                <ul className="nav">
                    <li className="nav-hover-main">
                        <Link to="/anime">Anime</Link>
                        <div className="nav-visible">
                            <div className="row width-row">
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/1/action">Hành động</Link></li>
                                            <li><Link to="/1/fiction">Viễn tưởng</Link></li>
                                            <li><Link to="/1/romance">Lãng mạn</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/1/horror">Kinh dị</Link></li>
                                            <li><Link to="/1/comedy">Hài hước</Link></li>
                                            <li><Link to="/1/school">Trường học</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/1/music">Âm nhạc</Link></li>
                                            <li><Link to="/1/adventure">Phiêu lưu</Link></li>
                                            <li><Link to="/1/supernatural">Siêu nhiên</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/1/life">Đời thường</Link></li>
                                            <li><Link to="/1/thrilling">Kịch tính</Link></li>
                                            <li><Link to="/manga">Truyện</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-hover-main">
                        <Link to="/anime">Movie</Link>
                        <div className="nav-visible">
                            <div className="row width-row-second">
                                <div className="col-4 col-md-12 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/2/hot">Phim Hot</Link></li>
                                            <li><Link to="/2/coming">Sắp chiếu</Link></li>
                                            <li><Link to="/2/action">Hành động</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 col-md-12 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/2/romance">Lãng mạn</Link></li>
                                            <li><Link to="/2/comedy">Hài hước</Link></li>
                                            <li><Link to="/2/science">Khoa học</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 col-md-12 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/2/horror">Kinh dị</Link></li>
                                            <li><Link to="/2/fiction">Viễn tưởng</Link></li>
                                            <li><Link to="/2/show">TV Show</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/rank" className="nav-hover" >BXH</Link></li>
                </ul>
                <Search />
                <div className="action">
                    {
                        user ?
                            <>
                                <div className="action-cart">
                                    <i className='bx bx-cart'></i>
                                    <Link to="/cart" className="btn btn-login cart">Giỏ hàng</Link>
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
                                                <li><i className='bx bx-user'></i><Link to="/user">Trang cá nhân</Link></li>
                                                <li><i className='bx bx-edit'></i><Link to="">Sửa thông tin</Link></li>
                                                <li><i className='bx bxs-lock-open' ></i><Link to="">Đổi mật khẩu</Link></li>
                                            </ul>
                                            <ul>
                                                <li><i className='bx bx-movie' ></i><Link to="">Phim đã xem</Link></li>
                                                <li><i className='bx bxs-heart' ></i><Link to="">Phim yêu thích</Link></li>
                                                <li><i className='bx bxs-bell' ></i><Link to="">Phim đang theo dõi</Link></li>
                                            </ul>
                                            <ul>
                                                <li><i className='bx bx-diamond'></i><Link to="">Nâng cấp VIP</Link></li>
                                                <li><i className='bx bx-money' ></i><Link to="">Nạp thêm KGEM (0)</Link></li>
                                                <li><i className='bx bx-history' ></i><Link to="">Lịch sử giao dịch</Link></li>
                                            </ul>
                                            <ul>
                                                <li><i className='bx bx-log-out'></i><Link to="" onClick={logout}>Đăng xuất</Link></li>

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
                    <div className="nav-mobile-header" onClick={openNav}>
                        <i className='bx bx-menu'></i>
                    </div>
                    <div className="hamburger-nav">
                        <div className={`dropdown-nav ${open ? "open" : null}`}>
                            <div className="row width-row">
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/1/action">Hành động</Link></li>
                                            <li><Link to="/1/fiction">Viễn tưởng</Link></li>
                                            <li><Link to="/1/romance">Lãng mạn</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/1/horror">Kinh dị</Link></li>
                                            <li><Link to="/1/comedy">Hài hước</Link></li>
                                            <li><Link to="/1/school">Trường học</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li><Link to="/1/music">Âm nhạc</Link></li>
                                            <li><Link to="/1/adventure">Phiêu lưu</Link></li>
                                            <li><Link to="/1/supernatural">Siêu nhiên</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-4 col-sm-12 box-content">
                                    <div className="box">
                                        <ul>
                                            <li className='item-nav'><i className='bx bx-user icon-user'></i><Link to="">Đăng nhập</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <Form active={active} handleActive={handleActive} />
        </>
    );
}

export default Header;