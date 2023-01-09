import App from "./_app";
import { hydrateRoot } from "react-dom/client";

const root = document.getElementById("root") as HTMLElement;

hydrateRoot(root, <App />);
