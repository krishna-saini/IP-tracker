const getIP = async()=>{
    const data = await fetch("https://api.ipify.org/?format=json");
    const res = await data.json();
    return res;

}
export default getIP;