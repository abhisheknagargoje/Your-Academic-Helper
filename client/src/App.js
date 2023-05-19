import root from "./routes/root";
import doubtsPage from "./routes/doubtsPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import about from "./routes/about";
import meetings from "./routes/meetings";
import signUp from "./routes/signUp";
import signIn from "./routes/signIn";
import answersPage from "./routes/answersPage";
import createDoubt from "./routes/createDoubt";
import EventPage from "./routes/eventPage";

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
        <Route path="/doubts/createDoubt" Component={createDoubt} />
        <Route path="/doubts/:id" Component={answersPage} />
        <Route path="/meetings/:eventId" Component={EventPage} />
      </Routes>
    </Router>
  );
}

export default App;
