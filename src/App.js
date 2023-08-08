import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./UI/Sidebar/Sidebar";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { langActions } from "./store/Lang/Lang";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const dispatch = useDispatch();
  const rootEle = document.getElementById("root-html");
  const globalLang = useSelector((state) => {
    return state.lang.globalLang;
  });

  useEffect(() => {
    if (!lang && rootEle) {
      setLang(rootEle.getAttribute("lang"));
    }
    dispatch(langActions.translation({ lang: lang }));
    // console.log('first init lang', lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (rootEle) {
      if (globalLang === "ar") {
        rootEle.setAttribute("dir", "rtl");
      }
      if (globalLang === "en") {
        rootEle.setAttribute("dir", "ltr");
      }
      rootEle.setAttribute("lang", globalLang);
      localStorage.setItem("lang", globalLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalLang]);

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <LayoutWrapper />,
    },
    {
      path: '/auth',
      // element: <Auth />,
    },
    {
      path: "*",
      loader: () => redirect("/home")
    },
  ]);

  return (
    <div style={{ display: "flex", height: "100vh", position: 'relative', flexDirection: 'row' }}>
      <Sidebar />
      <main className="page-content">
        <Navbar />
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
