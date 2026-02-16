import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * Doporucuji provést kontrolu, že ten #root element opravdu existuje, jinak chyba do console.error(...)
 */
const root = document.getElementById("root");
if(root !== null) {
    // Doporuceno vkladat StrictMode element, odhalí se tím ve fázi ladění mnoho chyb
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error("Element #root nebyl nalezen.");
}
