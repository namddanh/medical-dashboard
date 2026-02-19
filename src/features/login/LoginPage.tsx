import Button from "../../components/ui/Button";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Shell = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.border};
  height: 100vh;
`;

const LoginPage = () => {
  const { login, isAuthed } = useAuth();
  const navigate = useNavigate();

  return (
    <Shell>
      <h4>Login Page</h4>
      <Button
        variant="primary"
        onClick={() => {
          login();
          navigate("/dashboard");
        }}
      >
        Login
      </Button>

      <p>Is authed? {isAuthed ? "Yes" : "No"}</p>
    </Shell>
  );
};

export default LoginPage;
