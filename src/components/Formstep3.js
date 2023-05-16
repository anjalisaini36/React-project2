import React from 'react'
const Formstep3=(props)=>{
    const{Address}=props;
    return(
        <div>
              <div><label htmlFor="test">{Address} </label></div><br />
              <div><input type="text" placeholder='Street'/></div><br />
              <div><input type="number" placeholder='Zipcode' /></div><br />
             <div> <input type="text" placeholder='City' /></div><br />
              <div><input type="text" placeholder='State'/></div>

        </div>
    )
};

export default Formstep3;