import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import auth0 from "@utils/auth0";
import { authorizeUser } from "@utils/auth0";

const SecretSSR = ({ user }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am Secret Page {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const user = await authorizeUser(req, res);

  return {
    props: { user },
  };
};

export default SecretSSR;
