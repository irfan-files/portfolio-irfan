import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/components/BasePage";
import { useGetPosts } from "@/actions";

const Portfolios = () => {
  const { posts, error } = useGetPosts();

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

export default Portfolios;
