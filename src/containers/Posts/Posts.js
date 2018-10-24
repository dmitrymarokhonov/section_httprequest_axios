import React, { Component } from "react";
import styles from "./Posts.module.scss";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

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
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/" + id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
          <Post
            title={post.title}
            key={post.id}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className={styles.Posts}>{posts}</section>
        <Route path="/.id" exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
