import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './comment.css'
function Comment({ match, props }) {
    const [text, setTxt] = useState()
    const [cmt, setCmt] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const comment = `https://json-server-anime.herokuapp.com/comment`
            const res = await axios(comment)
            setCmt(res.data.reverse())
        }
        fetch()
    }, [cmt])

    const submitCmt = async (data) => {
        const urlCmt = `https://json-server-anime.herokuapp.com/comment`

        const obj = {
            id: Math.floor(Math.random() * 1000),
            idUser: Math.floor(Math.random() * 1000),
            name: match.params.name,
            content: data
        }
        await axios.post(urlCmt, obj)
        setTxt('')
        console.log(obj);
    }

    const handleChange = e => {
        setTxt(e.target.value)
        console.log(e.target.value)
    }


    return (
        <div className="comment mg-top">
            <h3 className="title">Bình luận</h3>
            <div className="row">
                <div className="col-8 col-md-12 col-sm-12">
                    <div className="wrapper-comment mg-top">
                        <div className="header-comment">
                            <div className="number-comment">268 comments</div>
                            <div className="select-comment">
                                <span className="sort-comment">Sort by</span>
                                <select>
                                    <option value="1">Latest</option>
                                    <option value="3">Oldest</option>
                                </select>
                            </div>
                        </div>
                        <div className="body-comment">
                            <div className="body-comment-main">
                                <img src="" alt="" width="48px" height="48px" />
                                <div className="input-comment">
                                    <textarea className="txtarea" placeholder="Add Comment..." value={text} onChange={handleChange}></textarea>
                                    <div className="footer-txt">
                                        <div className="up-social">
                                            <input type="checkbox" />
                                            <span>Cũng đăng lên Facebook</span>
                                        </div>
                                        <div className="btn-post">
                                            <button className="post" disabled={!text} onClick={() => submitCmt(text)}>
                                                Đăng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* loop comment here */}

                            {cmt.map((item, index) => (
                                item.name === match.params.name ? <div className="body-comment-customer" key={index}>
                                    <img src="" alt="" width="48px" height="48px" />
                                    <div className="display-comment">
                                        <div className="display-name display">
                                            <span>Tuấn Kiệt</span>
                                        </div>
                                        <div className="display-cmt display">
                                            <span>{item.content}</span>
                                        </div>
                                        <div className="display-active display">
                                            <span>Like</span>
                                            <span>Rep</span>
                                        </div>
                                    </div>
                                </div> : null
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;