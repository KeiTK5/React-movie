import React from 'react';
import './blog.css'


function RenderBlog(props) {
    const { item } = props
    return (
        <div className="col-3 col-md-4 col-sm-6 blog-mg mg-top">
            <div className="blog-item">
                <div className="blog-item-image">
                    <img src={item.images} alt="" />
                </div>
                <div className="content">
                    <span>{item.content}</span>
                </div>
            </div>
        </div>
    )
}

function Blog(props) {
    const { data } = props
    return (
        <section className="wow fadeIn">
            <div className="container">
                <h3 className="title">{props.title}</h3>
                <div className="blog">
                    <div className="row">
                        {
                            data.map(item => (
                                item.category === 'Blog' ? <RenderBlog item={item} key={item.id} /> : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;