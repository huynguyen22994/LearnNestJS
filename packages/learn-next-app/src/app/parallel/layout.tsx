export default function Layout(props: {
  analytics: React.ReactNode;
  team: React.ReactNode;
  login: React.ReactNode;
}) {
  console.log(props);
  const isLogin = true;

  return (
    <>
      this is Layout
      {isLogin ? (
        <>
          <h3>Analytics</h3>
          {props.analytics}

          <h3>team</h3>
          {props.team}
        </>
      ) : (
        <>{props.login}</>
      )}
    </>
  );
}
