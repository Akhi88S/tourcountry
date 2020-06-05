import React from 'react';  
import './page.css'
//,{Component}
import {Link,Redirect} from 'react-router-dom';

//import { Button} from 'react-bootstrap';
//import { Card} from 'react-bootstrap';
//import Carousel from 'react-bootstrap/Carousel'
const Page=(props)=>{
      try{

     
console.log(props.location.details);
var detail=props.location.details;
var count = Object.keys(detail.Notallowed).length;
var avg=count/2;

      }
      catch(error)
      {
            return <Redirect to="/" />
      }
      const styles = {
            width:"100px",
             border:"2px solid black",
          }
return(
    <div className="container">
               <h2>{detail.country}<hr/></h2>
 
         
                     <h3>Prohibited <hr style={styles}/></h3>
                     <div className="data">
              {

                       detail.Notallowed.map((Notallow,index)=>
                     {
                           
return index<avg ?  <div className="box1">  <a className="ahover" target="_blank" href={`${detail.url}`}> <strong className="data1" >{Notallow} </strong>
</a>       </div>

:
<div className="box2"> <a className="ahover" target="_blank" href={`${detail.url}`}><strong className="data2"> {Notallow} </strong></a>
</div>      


                     }

                     
           
                      
           
                     )
                     }
</div>                  
              
              <a  target="_blank" href={`${detail.url}`}><button className="detailed">Detailed Explanation >></button>
<br/><br/></a>

</div>

      )
}
export default Page;
