import { convert } from "html-to-text";
import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const rawPosts = await fetch(
        "https://www.energy.mn/web/?rest_route=/wp/v2/posts&per_page=8"
      );
      const posts = await rawPosts.json();

      setPosts(posts);
    }

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return "Өгөгдөл татагдаж байна";
  }

  return (
    <div className="postsContainer">
      {posts.map((el) => (
        <div className="singlePostContainer" key={el.id}>
          <div>
            <h5>{el.title.rendered.slice(0, 70)}...</h5>
            <p>
              {convert(el.excerpt.rendered, {
                limits: 25,
              }).slice(0, 250)}
              ...
            </p>
          </div>
          <Link
            to={{
              pathname: `/post/read/id=${el.id}`,
              state: { data: el },
            }}
          >
            ДЭЛГЭРЭНГҮЙ
          </Link>
        </div>
      ))}
    </div>
  );
}
