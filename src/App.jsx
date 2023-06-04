
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="1280px">
      <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      </Routes>
    </Container>
  );
}

export default App;