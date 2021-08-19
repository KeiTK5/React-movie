import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import SkeType from '../../../skeleton/SkeType';


function Image(props) {
    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const url = 'https://api.unsplash.com/photos/random?count=8&query=london&client_id=E0LyyyHOwP4k-4XeEY24uxv2vTXb042YZDPZ4Rn1vEM'
        setTimeout(() => {
            const fetch = async () => {
                const res = await axios.get(url)
                setImage(res.data)
                console.log(res.data)
                setLoading(false)
            }
            fetch()
        }, 1500);
    }, [])

    return (
        <section>
            <div className="container">
                <div className="path">
                    <i className='bx bxs-home'></i>
                    <i className='bx bx-chevron-right'></i>
                    <span>API</span>
                </div>
                <div className="row">
                    {
                        loading ?
                            [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                                <SkeType key={item} />
                            )) :
                            image.map(item => (
                                <div className="col-3 col-md-4 col-sm-6 blog-mg mg-top">
                                    <div className="video-item type-item">
                                        <img src={item.urls.raw} alt="" />
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Image;