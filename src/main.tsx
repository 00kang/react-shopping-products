import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ErrorProvider } from "./context/errorContext.tsx";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorProvider>
      <App />
    </ErrorProvider>
  </React.StrictMode>
);
