import { useState } from "react";
import "./App.css";
import Formstep1 from "./components/Formstep1";
import Formstep2 from "./components/Formstep2";
import Formstep3 from "./components/Formstep3";

function App() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
   if (step!==2){
    setStep((prev) => prev + 1);
   }
  };

  const handleBack = () => {
    if (step !== 0) {
      setStep((prev) => {
       return( prev - 1)
      });
    }
  };

  const myfunction = (name,fatherName) => {
    console.log(name+" D/o "+fatherName);
  };

  myfunction("Anjali","Rajender");
  myfunction("Rajneder","Preeti");


  return (
    <div className="App">
      {step === 0 && (
        <Formstep1 First_Name="First Name: " last_Name="Last Name: " />
      )}

      {step === 1 && <Formstep2 Birthday="Birth Date:" />}
      {step === 2 && <Formstep3 Address="Address: " />}
      <button className="btn1" onClick={handleBack}>Back</button>
      <button className="btn2" onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
