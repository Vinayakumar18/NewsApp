import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultImg from '../assets/news.jpg';

export const NewsSearch = (props) => {
    const [news, setNews] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const fetchNews = (query = '', category = '') => {
        let url = `https://newsapi.org/v2/top-headlines?pageSize=60&country=us&apiKey=${props.api}`;
        if (query) {
            url = `https://newsapi.org/v2/top-headlines?pageSize=60&q=${query}&apiKey=${props.api}`;
        } else if (category) {
            url = `https://newsapi.org/v2/top-headlines?pageSize=60&category=${category}&apiKey=${props.api}`;
        }
        axios
            .get(url)
            .then((response) => {
                setNews(response.data.articles);
            })
            .catch((error) => {
                setError('Error fetching data');
                console.error(error);
            })
            .finally(() => {
                console.log('API call completed');
            });
    };

    useEffect(() => {
        if (props.Category) {
            fetchNews('', props.Category);
        } else {
            fetchNews();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.Category]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const search = () => {
        fetchNews(input);
    };

    return (
        <>
            <div className='container'>
                <div className="input-group m-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter keywords, name, title"
                        onChange={handleChange}
                        value={input}
                    />
                    <button className="btn btn-outline-secondary" type="button" onClick={search}>
                        Search
                    </button>
                </div>
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <hr />
            <div className="row">
                {news.filter((item) => { return item.source.id !== null }).map((data, index) => {
                    return (
                        <div className="col m-1" key={index}>
                            <div className="card" style={{ width: '21rem', height: '36rem' }}>
                                <div className="card-header">{data.source.name}</div>
                                <img src={data.urlToImage || DefaultImg} className="card-img-top" alt="" style={{ height: '300px' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text flex-grow-1">{data.description}</p>
                                    <a href={data.url} className="btn btn-primary mb-1 mt-auto" rel="noreferrer" target="_blank">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};