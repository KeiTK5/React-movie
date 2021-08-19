import React from 'react';

function Footer(props) {
    return (
        <section>
            <div className="container">
                <div className="footer">
                    <div className="row">
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="footer-title">
                                K-Movie Việt Nam
                            </div>
                            <div className="footer-content">
                                <p>PS13732 - Trần Tuấn Kiệt</p>
                                <p>Email: tkiet1705@gmail.com</p>
                                <p>Thẻ quà tặng</p>
                                <p>Tuyển dụng</p>
                                <p>Liên hệ quảng cáo K-movie</p>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="footer-title">
                                Điều khoản sử dụng
                            </div>
                            <div className="footer-content">
                                <p>Điều khoản chung</p>
                                <p>Điều khoản giao dịch</p>
                                <p>Chính sách thanh toán</p>
                                <p>Chính sách bảo mật</p>
                                <p>Câu hỏi thường gặp</p>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="footer-title">
                                Kết nối với chúng tôi
                            </div>
                            <div className="footer-content">
                                <p><i className='bx bxl-facebook-square'></i>Facebook</p>
                                <p><i className='bx bxl-youtube' ></i>Youtube</p>
                                <p><i className='bx bxl-instagram'></i>Instagram</p>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="footer-title">
                                Chăm sóc khách hàng
                            </div>
                            <div className="footer-content">
                                <p>Hotline: 1900 6017</p>
                                <p>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</p>
                                <p>Email hỗ trợ: tkiet1705@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;