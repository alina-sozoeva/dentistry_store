import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
