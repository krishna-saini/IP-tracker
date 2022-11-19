const Output = (props) => {
    //   console.log(props);
      const { country, city, postalCode, timezone } = props.data.location;
    
      return (
        <div className="border-2 border-black mx-20 my-8 py-6 flex justify-around">
          <div>
            <h6>IP Address</h6>
            <p>{props.data.ip}</p>
          </div>
          <div>
            <h6>Location</h6>
            <p>
              {city},{country} {postalCode}
            </p>
          </div>
          <div>
            <h6>TimeZone</h6>
            <p>GMT{timezone}</p>
          </div>
          <div>
            <h6>ISP</h6>
            <p>{props.data.isp}</p>
            
          </div>
        </div>
      );
    };
    export default Output;
    