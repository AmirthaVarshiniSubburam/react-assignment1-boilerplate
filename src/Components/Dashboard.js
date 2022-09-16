import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Dashboard = () => {
  const [trending,setTrending] =useState([])
  const [readlaterdb, setReadlaterdb] = useState([])

  useEffect (() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apikey=66eb0cff0cdd47629cf39c85c5c801bf&page=1`)
    .then((res)=> {
      setTrending(res.data.articles)
      // console.log(res);
      // console.log(res.data);
      // console.log(res.data.articles);
    })
    
  },[]);

  const readLater = (newCard) => {
    axios
      .post('http://localhost:3000/readLater', newCard, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        if (response.status === 201) {
          setReadlaterdb([...readlaterdb, response.data]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  return (
    <div className="container">
            <div className="row">
        {trending.map((news)=>(
            
            <div className="col-sm-3" key={news.url} >
              
            <Cards            
            description={news.description}
            urlToImage = {news.urlToImage}
            title = {news.title}
            readLater={readLater}
            author = {news.author}
            // url to expand the news
            url = {news.url}
            />
            </div>
            ))

          }      
              </div>
              </div>
      
  ) 

}
export default Dashboard