const getResponseFromAPI = async (ip) => {
    const data = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_SLdcDARNoX2f8l8BdMwsvfeFp01JO&ipAddress=${ip}`
    );
    const res = await data.json();
    return res;
  };
  export default getResponseFromAPI;
  