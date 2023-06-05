import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
const Layout = () => {
  return (
    <Container maxWidth='1280px'>
      <Outlet />
    </Container>
  );
};

export default Layout;