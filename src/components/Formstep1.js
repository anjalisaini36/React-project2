import React, { useState } from 'react'
const Formstep1=(props)=>{
const {First_Name,last_Name}=props;
return(
    <div>
        <div><label htmlFor="text">{First_Name}</label>
        <input type="text" id='fname' name='fname' /></div><br />
        <div><label htmlFor="text">{last_Name}</label>
        <input type="text" id='fname' name='fname' /></div><br />
    </div>
)
};



export default Formstep1;