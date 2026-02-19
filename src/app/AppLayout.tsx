import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/ui/Button";

const Shell = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 56px 1fr;
  height: 100vh;
`;

const TopNav = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Side = styled.div`
  padding: 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Main = styled.div`
  padding: 16px;
  overflow: auto;
`;

const LinkItem = styled(NavLink)`
  display: block;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
  border-right: 1px solid ${({ theme }) => theme.colors.muted};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.border};

  &.active {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const AppLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Shell>
      {/* NOTE TOP NAVIGATION */}
      <TopNav>
        <h4>Top Nav - AppLayout</h4>

        <Button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </TopNav>
      {/* NOTE SIDEBAR */}
      <Side>
        <h4>Side Bar</h4>
        <LinkItem to="/dashboard">Dashboard</LinkItem>
        <LinkItem to="/patients">Patients</LinkItem>
        <LinkItem to="/appointments">Appointments</LinkItem>
        <LinkItem to="/audit">Audit</LinkItem>
      </Side>
      {/*  NOTE MAIN CONTENT */}
      <Main>
        <h4>Main</h4>
        <Outlet />
      </Main>
    </Shell>
  );
};

export default AppLayout;
