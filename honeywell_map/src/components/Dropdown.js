import React from "react";
import Select from 'react-dropdown-select';


const Dropdown = ({cities,destination,setDestination}) => {

    

    const onChange =(val) => {
      console.log("val",val)
      setDestination(val)
    }
 
     return(

         <Select 
         options={cities}  
         getOptionValue={option => option.name}
         getOptionLabel={option => option.name}  
         onChange={(values) =>onChange(values)} 
         />

          )

}

export default Dropdown;