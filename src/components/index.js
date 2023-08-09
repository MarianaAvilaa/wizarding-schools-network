export { default as Main } from "./Main.js";
import { CampusProvider } from "./CampusesProvider.js";
import { StudentProvider } from "./components/StudentProvider";

root.render(
    <React.StrictMode>
        <CampusProvider>
      <StudentProvider>
        <Router>
          <Root />
        </Router>
      </StudentProvider>
      </CampusProvider>
    </React.StrictMode>
  );