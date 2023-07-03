import Settings from "./pages/settings";
import EventList from "./pages/eventlist";
import AlertPage from "./pages/alertpage";
import ApplicationContent from "./design/application/content";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ApplicationContent>
      <Routes>
        <Route path="/" element={<Settings></Settings>} />
        <Route path="/Events" element={<EventList></EventList>} />
        <Route path="/Alerts" element={<AlertPage></AlertPage>} />
      </Routes>
    </ApplicationContent>
  );
}

export default App;
