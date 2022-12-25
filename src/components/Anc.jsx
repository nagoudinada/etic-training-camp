
import React from 'react'
import {home,shop,like} from '../assets/icons'
import Rating from './Rate';
import Hover from './Hover'


function Anc(){


return(
    <div className='cu'>
         
 {/* <a className='anc' href="/"><img src={home} alt="/" /></a>   */}

 <div className='anc'><Hover/></div> 



    {/*   <div class="show-image">
  <img src={home} />
  <input class="the-buttons" type="button" value=" Click " />
</div> 
        
        </div> */}

 <h4 className='tono'>Porche Cayenne 2023</h4>
                   <div className='najma'><Rating/> </div> 
        <p className='drahm'>1 DA</p>
        

        </div>
);
    
};
export default Anc;