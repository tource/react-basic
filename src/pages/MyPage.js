import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLogin = false;

  //   if (!isLogin) {
  //     return <Navigate to="/login" replace={true} />;
  //   }

  return (
    <div>
      <h2>마이페이지</h2>
      {!isLogin && <Navigate to="/login" replace={true} />}
    </div>
  );
};

export default MyPage;
