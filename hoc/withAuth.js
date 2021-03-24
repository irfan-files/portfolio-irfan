import { useGetUser } from "@/actions/user";
import Redirect from "@/components/shared/Redirect";

const withAuth = (Components) => {
  return (props) => {
    const { data, loading } = useGetUser();

    if (loading) {
      return <p>loading...</p>;
    }

    if (!data) {
      return <Redirect ssr to="/api/v1/login" />;
    } else {
      return <Components user={data} loading={loading} {...props} />;
    }
  };
};

export default withAuth;
