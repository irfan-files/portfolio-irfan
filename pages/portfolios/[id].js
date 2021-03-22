import axios from "axios";
import React from "react";
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetData } from "@/actions";
import { useRouter } from "next/router";
const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio } = useGetData(
    router.query.id ? `/api/v1/posts/${router.query.id}` : null
  );

  return (
    <BaseLayout>
      <BasePage>
        {portfolio && (
          <>
            <h1>I am Portfolio page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
