import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './search.css'


const Dropdown = ({ search }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (search) {
            const fetch = async () => {
                const url = `https://tender-overshirt-colt.cyclic.app/animes?name_like=${search}`;
                const res = await axios(url)
                setData(res.data.slice(0, 6))
                console.log(url);
            }
            return fetch()
        }
    }, [search])


    return (
        <div className="dropdown">
            {
                search ?
                    data.map(item => (
                        <div className="dropdown-item" key={item.id}>
                            <div className="dropdown-content"><a href={`./detail/${item.categoryId}/${item.name}/${item.id}`} className="movie-items-search">{item.name}</a></div>
                        </div>
                    ))
                    :
                    null
            }
            {
                search ?
                    <div className="dropdown-result">
                        <div className="dropdown-item">Tìm tất cả kết quả</div>
                    </div> :
                    null
            }

        </div>
    )
}

function Search(props) {
    const [search, setSearch] = useState('')

    const isSearch = e => {
        setSearch(e.target.value)
    }

    return (
        <div className="nav-search">
            <input type="text" className="search-input" placeholder="Search" value={search} onChange={isSearch} />
            <span><i className='bx bx-search'></i></span>
            <Dropdown search={search} setSearch={setSearch} />
        </div>
    );
}

export default Search;