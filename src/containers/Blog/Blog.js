import React, { Component } from "react";
import {Route} from "react-router-dom";
import Posts from "../Posts/Posts";
import styles from "./Blog.module.scss";

class Blog extends Component {
  render() {
    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path={"/"}  render={() => <h1>home</h1>} />
        <Route path={"/"} exact render={() => <h1>home2</h1>} />
      </div>
    );
  }
}

export default Blog;
