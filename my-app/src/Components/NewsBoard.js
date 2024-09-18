import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import './NewsBoard.css'
const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e2fcf6c0278a4fe4baed80a308328faf`
        fetch(url)
          .then((Response) => Response.json())
          .then((data) => setArticles(data.articles));
    }, [category])

    return (
        <div>
            <h2 class="text-center">Latest <span class="badge bg-danger">News</span></h2>
            <div class="news-container">
                {articles.map((news, index)=>{
                    return <NewsItem key={index} title={news.title} description= {news.description} src={news.urlToImage} url={news.url}/>
                })}
            </div>
        </div>
    )
}

export default NewsBoard