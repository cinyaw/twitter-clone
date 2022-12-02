import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core"
import db from './firebase'

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection ('posts').add({
            displayName: 'Jayden Dollente',
            username: 'dollente.jayden',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            // avatar
        });
        
        setTweetMessage("");
        setTweetImage("");
    };

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
            <Avatar src='image.png'></Avatar>
            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" />
            </div>
            <input onChange={e => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder="Optional: Enter image URL" />
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox