import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import db from './firebase';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => 
      setvideos((snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video 
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          
          />
        ))}
      </div>
    </div>
  );
}

export default App;
