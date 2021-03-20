import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
export default class portfolio extends React.Component {
  static async getInitiaProps() {
    let posts = [];
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (e) {
      console.error(e);
    }
    return { posts: posts.slice(0, 10) };
  }

  renderPost(posts) {
    return posts.map((post) => <li key={post.id}>{post.id}</li>);
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <ul>{this.renderPost(posts)}</ul>
      </BaseLayout>
    );
  }
}