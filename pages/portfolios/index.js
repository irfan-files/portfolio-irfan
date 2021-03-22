import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import BasePage from "@/components/BasePage";

const Portfolios = ({ posts }) => {
  useEffect(() => {
    async function getPosts() {
      const res = await fetch("/api/v1/posts");
      const data = await res.json();
      debugger;
    }
    getPosts;
  }, []);
  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios[id]">
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <BasePage>
        <ul>{renderPosts(posts)}</ul>
      </BasePage>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let post = [];

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
    post = res.data;
  } catch (e) {
    console.error(e);
  }

  return { posts: post.slice(0, 10) };
};

export default Portfolios;
