import React, { Component } from "react";
import styles from "./Posts.module.scss";
import axios from "../../axios";
import Post from "../../components/Post/Post";

class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4); // first 4 posts
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Dima"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }
  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return <section className={styles.Posts}>{posts}</section>;
  }
}

export default Posts;
