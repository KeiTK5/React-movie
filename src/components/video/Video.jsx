import React from 'react';
import './video.css'


function RenderVideo(props) {
    const { item } = props
    return (
        <div className="col-3 col-md-4 col-sm-6 blog-mg mg-top">
            <div className="video-item">
                <img src={item.image} alt="" />
                <div className="video-play">
                    <i className='bx bx-play-circle'></i>
                    <span className="time">{item.time}</span>
                </div>
                <span className="video-content">{item.content}</span>
            </div>
        </div>
    )
}

function Video(props) {
    const { data } = props
    return (
        <section>
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <div className="video">
                    <div className="row wow fadeIn">
                        {
                            data.map(item => (
                                item.category === 'Video' ? <RenderVideo item={item} key={item.id} /> : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Video;