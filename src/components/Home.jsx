import React, { useEffect, useState } from 'react';
import data from '../assets/json/data.json';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Bxh from './BXH/Bxh';
import Cartoon from './Cartoon/Cartoon';
import HotItems from './HotItem/HotItems';
import Manga from './Manga/Manga';
import Video from './video/Video';

const arr = []

function Home() {

    const [buy, setBuy] = useState([])


    // lấy data
    useEffect(() => {
        const local = localStorage.getItem("object")
        const getData = () => {
            if (local) {
                setBuy(JSON.parse(local) || arr)
            }
        }
        getData()
    }, [])

    // Lưu data
    useEffect(() => {
        const setData = () => {
            localStorage.setItem('object', JSON.stringify(buy))
        }
        setData()
    }, [buy])


    const clickBuy = (name) => {
        alert('Added to your ticket !')
        data.data.filter(item => item.name === name).map(item => setBuy([item, ...buy]))
    }


    return (
        <>
            <Banner />
            <Bxh title={'Sắp chiếu'} title2={'Xếp hạng'} />
            <HotItems title={'Phim Hot'} clickBuy={clickBuy} />
            <Cartoon title={'Anime'} clickBuy={clickBuy} />
            <Blog data={data.data} title={'Tin tức'} />
            <Video data={data.data} title={'Video'} />
            <Manga data={data.data} title={'Truyện tranh'} />
        </>
    );
}

export default Home;