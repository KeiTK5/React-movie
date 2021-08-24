import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './mangaP.css'

const Render = (props) => {
    const { item } = props
    return (
        <div className="mangaP col-3 col-md-4 col-sm-6 blog-mg mg-top">
            <div className="video-item manga-item">
                <img src={item.image} alt="" />
                <a href={`/detail/${item.category}/${item.name}/${item.id}`} className="video-content">{item.name}</a>
            </div>
        </div>
    )
}

function Man({ match, props }) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        setTimeout(async () => {
            const url = `https://json-server-anime.herokuapp.com/categories/5/animes`
            const res = await axios(url)
            setData(res.data)
            setLoading(false)
            console.log(url);
        }, 1500);
    }, [])

    // paginate
    const [pageNumber, setPageNumber] = useState(0)
    const limit = 10

    const pageCurrent = pageNumber * limit

    const ceil = Math.ceil(data.length / limit)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const pagination = data.slice(pageCurrent, pageCurrent + limit).map(item => (
        <Render item={item} key={item.id} />
    ))



    return (
        <section>
            <div className="container">
                <div className="path">
                    <i className='bx bxs-home'></i>
                    <i className='bx bx-chevron-right'></i>
                    <span>Manga</span>

                </div>
                <div className="title-movie">
                    <h3 className="title">Nội dung</h3>
                </div>
                <div className="video">
                    <div className="row wow fadeIn">
                        {
                            pagination
                        }
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 center">
                            <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={ceil}
                                onPageChange={changePage}
                                containerClassName={"pagination-wrapper"}
                                previousLinkClassName={"btn-prev"}
                                nextLinkClassName={"btn-next"}
                                activeLinkClassName={"btn-active"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Man;