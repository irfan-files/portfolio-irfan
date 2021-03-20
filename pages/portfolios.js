import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Link from "next/link";
import axios from "axios";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let post = [];
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      post = res.data;
    } catch (e) {
      console.error(e);
    }

    return { posts: post.slice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolios;
