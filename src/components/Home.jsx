import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from '../assets/json/data.json';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Bxh from './BXH/Bxh';
import Cartoon from './Cartoon/Cartoon';
import HotItems from './HotItem/HotItems';
import Manga from './Manga/Manga';
import Video from './video/Video';
import { useAuth } from '../context/AuthorProvider'

const arr = []

function Home() {
    const { user } = useAuth()

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


    const clickBuy = async (item, quantity) => {
        console.log(item);
        alert('Added to your ticket !')
        const url = 'https://json-server-anime.herokuapp.com/order'
        const obj = {
            user: user.email,
            name: item.name,
            price: item.price,
            author: item.author,
            image: item.image,
            categoryId: item.categoryId,
            premiere: item.premiere,
            time: item.time,
            language: item.language,
            quantity: quantity
        }
        await axios.post(url, obj)
    }


    return (
        <>
            <Banner />
            <Bxh title={'Sắp chiếu'} title2={'Xếp hạng'} />
            <HotItems title={'Phim Hot'} clickBuy={clickBuy} />
            <Cartoon title={'Anime'} clickBuy={clickBuy} />
            <Blog title={'Tin tức'} />
            <Video title={'Video'} />
            <Manga title={'Truyện tranh'} />
        </>
    );
}

export default Home;