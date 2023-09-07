import './App.css';
import React, { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import Axios from "axios";

function App() {

  const [data, setData] = useState();

    const getData = async () => {
        const response = await Axios.get("http://localhost:5000/getData");
        setData(response.data)
    }

    useEffect(() => {
        getData()

    }, []);

  return (
    <>
      <Layout />
      <div>{data}</div>

    </>
  );
}

export default App;
