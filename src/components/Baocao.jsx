import React from 'react';

function Baocao(props) {
    return (
        <section>
            <div className="container">
                <h3 className="title">Nội dung đã làm</h3>
                <div className="hot-items-wrapper">
                    <div className="baocao">
                        <p>Sử dụng Router-dom để chuyển trang linh hoạt</p>
                        <p>Sử dụng Axios để lấy dữ liệu từ api</p>
                        <p>Sử dụng thư viện Owl-Carousel để dựng Slider</p>
                        <p>Sử dụng Grid xây dựng layout</p>
                        <p>Sử dụng Skeleton hiệu ứng loading</p>
                        <p>Sử dụng Firebase thực hiện chức năng đăng nhập</p>
                        <p>Sử dụng API từ api.unsplash</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Baocao;