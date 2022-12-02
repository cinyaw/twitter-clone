import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import './Post.css'
import { ChatBubbleOutline } from '@material-ui/icons'
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/Favorite"
import PublishIcon from "@material-ui/icons/Publish"


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) =>

{
    return (
        <div className='post' ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span>
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
});

export default Post