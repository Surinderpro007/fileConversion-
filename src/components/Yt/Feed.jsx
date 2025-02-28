import React, { useEffect, useState } from 'react';
// Importing JSON data
import data from './Data.json'; // Adjust the path if necessary

const Feed = () => {
  const [feedData, setFeedData] = useState([]);

  // Simulating fetching the data from a JSON file
  useEffect(() => {
    setFeedData(data); // In a real app, you might fetch data from an API here
  }, []);

  return (
    <div className="feed-container">
      <h1>Video Feed</h1>
      <div className="feed-list">
        {feedData.map((item) => (
          <div key={item.id} className="feed-item">
      
            <img 
              src={item.image} 
              alt={item.title} 
              className="feed-image" 
     
            />
            <div className="feed-details">
              <img
                src={item.channel_image}
                alt={item.channel_name}
                className="channel-image"
              
              />
              <div className="feed-text">
                <h2>{item.title}</h2>
                <p>Channel: {item.channel_name}</p>
                <div className="d-flex">

                <p>{item.views} views</p> &nbsp;•
                <p>  &nbsp;{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
