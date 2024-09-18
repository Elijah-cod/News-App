import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
const NewsBoard = () => {

    const [articles,setArticles] = useState([])

    useEffect(()=>{
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e2fcf6c0278a4fe4baed80a308328faf'
        fetch(url)
          .then((Response) => Response.json())
          .then((data) => setArticles(data.articles));
    }, [])

    return (
        <div>
            <h2 class="text-center">Latest <span class="badge bg-danger">News</span></h2>
            {articles.map((news, index)=>{
                return <NewsItem key={index} title={news.title} description= {news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}

export default NewsBoard