import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";

import { ToastProvider } from "@/context/ToastContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#f8fafc",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#f0fdf4",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fef2f2",
            },
          },
        }}
      />
    </ToastProvider>
  </StrictMode>
);
