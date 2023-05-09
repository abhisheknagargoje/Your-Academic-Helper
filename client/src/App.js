import root from "./routes/root";
import doubtsPage from "./routes/doubtsPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import about from "./routes/about";
import meetings from "./routes/meetings";
import signUp from "./routes/signUp";
import signIn from "./routes/signIn";
import answersPage from "./routes/answersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={root} />
        <Route path="/doubts" Component={doubtsPage} />
        <Route path="/about" Component={about} />
        <Route path="/meetings" Component={meetings} />
        <Route path="/signUp" Component={signUp} />
        <Route path="/signIn" Component={signIn} />
        <Route path="/doubts/:id" Component={answersPage} />
      </Routes>
    </Router>
  );
}

export default App;
