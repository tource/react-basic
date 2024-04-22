import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    // replace 옵션을 사용하면 페이지를 이동할 때 현재 페이지를 기록에 남기지 않음
    navigate("/articles", { replace: true });
  };

  const goHome = () => {
    // 첫 페이지로 가기
    navigate("/");
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "lightgray",
          padding: "1rem",
          fontSize: "24px",
        }}
      >
        Header
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
        <button onClick={goHome}>홈으로</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
