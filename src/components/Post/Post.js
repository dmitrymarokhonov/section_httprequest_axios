import React from "react";
import {withRouter} from "react-router-dom";

import styles from "./Post.module.scss";

const post = props => (
  <article className={styles.Post} onClick={props.clicked}>
  {console.log(props)}
    <h1>{props.title}</h1>
    <div className="Info">
      <div className={styles.Author}>{props.author}</div>
    </div>
  </article>
);

export default withRouter(post);
