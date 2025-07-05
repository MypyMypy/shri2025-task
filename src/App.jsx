import { Suspense, lazy } from "react";
import { Skeleton } from "./Skeleton";
import { Header } from "./Header";

import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/critical.css";

const Main = lazy(() => import("./Main"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Skeleton />}>
        <Main />
      </Suspense>
    </>
  );
}

export default App;
