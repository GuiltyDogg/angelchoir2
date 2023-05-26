import Settings from "./pages/settings";
import EventList from "./pages/eventlist";
import ApplicationContent from "./design/application/content";

function App() {
  return (
    <ApplicationContent>
      <Settings></Settings>
      <EventList></EventList>
    </ApplicationContent>
  );
}

export default App;
