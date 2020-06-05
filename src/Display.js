import React,{Component} from 'react';
import { Button} from 'react-bootstrap';
import { Card} from 'react-bootstrap';
import './Display.css';
import {Link} from 'react-router-dom';
class Display extends Component {
constructor(props){
  super(props);
  this.state = {
    c:0,
    zer:0,
    one:1,
    two:2
  }
}

render() {
  const styles = {
    width:"100px",
     border:"2px solid black",
  }

var x;
var breakCondition = true;

  this.props.details.map((detail)=>
    {
if(detail.Country.toUpperCase().replace(/\s/g, "") === this.props.formval.toUpperCase().replace(/\s/g, ""))
{
      x =

<div className="container divcardc1">

      <Card className="cardc">

      <Card.Body>
      <h2 className="country">{detail.Country}<br/> <hr/></h2>        
     
          <h3 className="prohib">Prohibited<br/> <hr style={styles}/></h3>
<div className="align">
{detail.Country?
  <div>
 <p className="one1"> <strong>{detail.NotAllowed[this.state.zer]} <hr/></strong>
</p> 
<p className="two2"> <strong>{detail.NotAllowed[this.state.one]} <hr/></strong>
</p> 
<p className="three3"> <strong>{detail.NotAllowed[this.state.two]} <hr/></strong>
</p> 

<p className="four4"> <strong>{detail.NotAllowed[3]} <hr/></strong>
</p> 
   </div>   
: null }    
</div>
          <Link to={{
pathname:"/page",  
details:{
  country:detail.Country,
  Notallowed:detail.NotAllowed,
  url:detail.Additionalinfo
}

          }}>
          <Button variant="danger">Read More about {detail.Country}>></Button>
</Link>
        </Card.Body>
      </Card>
      
</div>
 breakCondition= false;
}
else if(!(detail.country === this.props.formval) && breakCondition) {
  x=<h4>Not Found</h4>
}
}
  )

  return (
  <div className="App">

    {x}

</div>
  );


}

 }

export default Display;
