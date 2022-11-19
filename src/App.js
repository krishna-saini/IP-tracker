import Input from "./Components/Input";
import Output from "./Components/Output";
import Map from "./Components/Map";
import getCurrentIP from "./api/getIP.js";
import getDataFromIP from "./api/getResponseFromIP";

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [IP, setIP] = useState(null);
  const [IPData, setIPData] = useState();
  // to prevent rendering of components unless fetching is done
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    loadingData && getGeoData(IP);
  }, [loadingData, IP]);

  const getGeoData = async (IP) => {
    try {
      const response = await getCurrentIP();
      // console.log(response);
      const currentIp = response.ip;

      let ip;
      !IP ? (ip = currentIp) : (ip = IP);
      // console.log(ip);
      const dataFromIP = await getDataFromIP(ip);
      if(dataFromIP.code===422) throw new Error(dataFromIP.messages)
      setIPData(dataFromIP);
      setLoadingData(false);
    } catch (err) {
      console.log(err.message);
      alert(err.message)
      setLoadingData(true);
    }
  };

  const getInputHander = (input) => {
    setIP(input);
    setLoadingData(true);
  };
  // console.log(IPData)

  return (
    <div className=" text-center">
      <Input getInput={getInputHander} />
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <>
          <Output data={IPData} />
          {/* <Map data={IPData.location} /> */}
        </>
      )}
    </div>
  );
}

export default App;
