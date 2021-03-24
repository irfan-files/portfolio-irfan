import Header from "@/components/shared/Header";

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;
  return (
    <div className="layout-container">
      <main className={`cover ${className}`}>
        <Header user={user} loading={loading} />
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};
export default BaseLayout;
