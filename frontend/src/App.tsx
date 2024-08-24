import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
