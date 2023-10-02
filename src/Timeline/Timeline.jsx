import React, { useState } from "react";
import Post from "./posts/Post";
import Suggestions from "./Suggestion";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "luminartechnolab_",
      postImage:
        "https://www.itprotoday.com/sites/itprotoday.com/files/programming.jpg",
      likes: 1114,
      timestamp: "5hr",
      iconImg:"https://exreed-prod.s3.ap-south-1.amazonaws.com/profile/1649058200.jpeg"
    },
    {
      user: "sai_m",
      postImage:
        "https://www.tataaig.com/s3/senior-citizens-travel-insurance_cd09659466.jpeg",
      likes: 432,
      timestamp: "11hr",
      iconImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU"
    },
    {
      user: "sara_joseph",
      postImage:
        "https://images.unsplash.com/photo-1450609283058-0ec52fa7eac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
      likes: 500,
      timestamp: "24hr",
      iconImg:"https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg"
    },
    {
      user: "chris._ty",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/800px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg",
      likes: 2000,
      timestamp: "1d",
      iconImg:"https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg"
    },
    {
      user: "thres_23",
      postImage:
        "https://img2.storyblok.com/fit-in/1200x630/f/64062/1200x629/8ac6d6e332/reading-list-for-high-school-students.jpg",
      likes: 124,
      timestamp: "2d",
      iconImg:"https://image.shutterstock.com/image-photo/portrait-young-smiling-woman-looking-260nw-1865153395.jpg"
    },
    {
      user: "man_007",
      postImage:
        "https://images.ctfassets.net/wp1lcwdav1p1/6mxaJ3dP3klP3kWDkbEgl6/e61ad2f7d11060bb7c0e9c1c0489d99b/GettyImages-912920596.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive",
      likes: 998,
      timestamp: "2d",
      iconImg:"https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
    },
  ]);

  return (
    <div className="timeline">
      <div className="t-left">
        <div className="t-posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              iconImg={post.iconImg}
            />
          ))}
        </div>
      </div>
      <div className="t-right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;