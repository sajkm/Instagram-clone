import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestion.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Avatar alt="Remy Sharp" src="https://variety.com/wp-content/uploads/2021/06/Debbie-Morgan-Our-Kind-of-People-Fox.jpg" />
            </span>
            <div className="username__info">
              <span className="username">teen_a</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Avatar alt="Remy Sharp" src="https://i.cbc.ca/1.6255520.1644591326!/fileImage/httpImage/evelyn-bradley.jpg" />
            </span>
            <div className="username__info">
              <span className="username">rohan__</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Avatar alt="Remy Sharp" src="https://cdn.britannica.com/28/156628-050-8BFE381B/girl-Naga-Arunachal-Pradesh-India.jpg" />
            </span>
            <div className="username__info">
              <span className="username">la_ra_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Avatar alt="Remy Sharp" src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080" />
            </span>
            <div className="username__info">
              <span className="username">sam.uel_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;