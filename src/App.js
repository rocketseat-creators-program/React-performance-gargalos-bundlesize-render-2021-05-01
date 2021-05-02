import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/Navbar/NavBar";

const Today = React.lazy(() =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "Today" */ "./Pages/Today"
  )
);
const Search = React.lazy(() =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "Search" */ "./Pages/Search"
  )
);
const Account = React.lazy(() =>
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "Account" */ "./Pages/Account"
  )
);

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
          <React.Suspense fallback="loading..">
            <Routes>
              <Route path="today/*" element={<Today />} />
              <Route path="search/*" element={<Search />} />
              <Route path="account/*" element={<Account />} />
              <Route path="*" element={<Navigate to="/today" replace />} />
            </Routes>
          </React.Suspense>
        </div>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
