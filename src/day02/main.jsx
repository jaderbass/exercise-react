import { createRoot } from "react-dom/client";

import "./style.css";

import ProductList from "./components/ProductList.jsx";

const root = createRoot(document.querySelector("#root"));

function App() {
  return (
    <main>
      <div className="container">
        <ProductList />
      </div>
    </main>
  );
}

root.render(<App />);