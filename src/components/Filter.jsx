import React from 'react'
import {cards, tall} from '../assets/icons'

function Filter(){
//     constructor(props){
// super(props);
const year =( new Date()).getFullYear();
const years = Array.from(new Array(25),(val, index)=>  year- index );
//}
    return(
    <div className="filtbar">
        <span className='sort'>Sort By </span>
        <input className='button' type="text" placeholder="Name"/>
      

        <span className='tyear'>Year </span>


      <select className='sel'>
        {
            years.map((year,index )=>{
                return <option key={`year${index}`}  value="year" >{year}</option>
            })
        }
      </select>



     
      
       <a className='cards' href="/"><img src={cards} alt="/" /></a>
       <a className='tall' href="/"><img src={tall} alt="/" /></a> 
      
    </div>
    );
};

export default Filter 