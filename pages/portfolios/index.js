import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/components/BasePage";
import { useGetPosts } from "@/actions";

const Portfolios = () => {
  const { data, error } = useGetPosts();

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
      <BasePage>{data && <ul>{renderPosts(data)}</ul>}</BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
