import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp, iconImg }) {
  return (
    <div className="post">
      <div className="p-header">
        <div className="p-avatar">
        <Avatar alt="" src={iconImg} />
          {user} <span>• {timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="p-image">
        <img src={postImage} alt="" />
      </div>
      <div className="p-footer">
        <div className="p-footerIcons">
          <div className="p-iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="p-iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

export default Post;