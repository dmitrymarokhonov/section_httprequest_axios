import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import styles from "./Blog.module.scss";
// import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  activeClassName="my-active"
                  to="/"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                  exact
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="Blog_active__2q083"
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-usbmit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path={"/"} exact component={Posts} />
        <Route path={"/new-post"} component={NewPost} />
      </div>
    );
  }
}

export default Blog;
