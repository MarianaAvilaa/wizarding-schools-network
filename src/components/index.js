export { default as Main } from "./Main.js";
import { StudentProvider } from "./components/StudentProvider";

root.render(
    <React.StrictMode>
      <StudentProvider>
        <Router>
          <Root />
        </Router>
      </StudentProvider>
    </React.StrictMode>
  );