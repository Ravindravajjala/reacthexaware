import { useState } from "react";
import { Link } from "react-router-dom";

export function AddNewApp() {
  const [appName, setAppName] = useState("");
  const [appDescription, setAppDescription] = useState("");
  const [isAppNameRegistered, setIsAppNameRegistered] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsAppNameRegistered(false);
    setIsFormEmpty(false); 
    
    const lowerCaseAppName = appName.toLowerCase(); 
    
    if (lowerCaseAppName.trim() === "" || appDescription.trim() === "") {
      setIsFormEmpty(true); 
      return;
    }
  
    fetch(`https://localhost:44382/api/App/GetAllApps`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0 && data.some(app => app.appName.toLowerCase() === lowerCaseAppName)) { 
          setIsAppNameRegistered(true);
        } else {
          fetch("https://localhost:44382/api/App/AddApp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              appName: appName,
              appDescription: appDescription,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setAppName("");
              setAppDescription("");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function renderAlert() {
    if (isAppNameRegistered) {
      return (
        <div className="alert alert-danger" role="alert">
          {appName} is already registered.
        </div>
      );
    }
    if (isFormEmpty) {
      return (
        <div className="alert alert-danger" role="alert">
          Please fill in both AppName and AppDescription.
        </div>
      );
    }
    return null;
  }

  return (
    <div className="container text-center mt-5">
      <h2>App Details</h2>
      {renderAlert()}
      <form onSubmit={handleSubmit}>
        <label htmlFor="appName" >Enter the App Name</label>
        <input type="text" className={"col-xs-4"} placeholder="Enter appName" name="appName" value={appName} onChange={(event) => setAppName(event.target.value)}/>
        <br />
        <br />
        <label htmlFor="appDescription">Enter the App Description</label>
        <input type="text" className={"col-xs-4"} placeholder="Enter appDescription" name="appDescription" value={appDescription} onChange={(event) => setAppDescription(event.target.value)}
        />
        <br />
        <br />

        <button type="submit" className="btn btn-success" >
          Register new App
        </button>
    
      </form>

      <img
    src="https://www.zitima.com/media/1305/mobile-apps.png"
    alt=""
  style={{
    width: '800px',   
    height: '350px',  
    position: 'absolute',
    bottom: '0',
    left: '50%',      
    transform: 'translateX(-50%)' ,
    marginTop: '80px'
  }}
/>
<button style= {{ position: "absolute", top: "50px", left:"60px"}}><Link to="/NavbarA">Back</Link></button>
    </div>
  );
}

export default AddNewApp;
