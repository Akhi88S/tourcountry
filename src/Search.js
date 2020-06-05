import React,{Component} from 'react';
import './App.css';
import './Search.css';
import Display from './Display';

class Search extends Component {
  _isMounted = false;
  constructor(props){
  super(props);
  this.state={
formvalue:'',
details: [],
count:1,
issubmit: 0,
show:false,


  }
  this.handleformvalue = this.handleformvalue.bind(this);
  }

  
  

componentDidMount(){

  fetch("https://countrydetails.herokuapp.com/api/details")
  .then(res=>res.json())
  .then(details=> this.setState({ details}));
  
  this.timeoutId = setTimeout(function () {
    this.setState({show: true});
}.bind(this), 3000);
console.log(`${this.state.details}`);

  }



handleformvalue=(event)=>{
clearTimeout(this.timeout);
const formvalue = event.target.value;
  this.setState({
    formvalue
  });
  }

handlesubmit=(event)=>{
//  console.log(event);
//alert(`${this.state.formvalue}`);
this.setState({
  count:(this.state.count)+1,
  issubmit:1,
})
console.log(`${this.state.count}`);
  event.preventDefault();



}


render()
{
    return(
      <div  className={this.state.show ?"centr img":"centr img2"}>


      <h2 className={this.state.issubmit ? "xyz1":"xyz2"}>Search your Tour Country</h2>

 <form onSubmit={this.handlesubmit}>

<input className={this.state.issubmit ? "searchbar2":"searchbar1"} placeholder="Enter Country" value={this.state.formvalue} onChange={this.handleformvalue}
/>

</form>

<div className="container">
{(() =>{
if(this.state.issubmit){
  return(
    <div>
      {

      }
 <Display details={this.state.details}  formval={this.state.formvalue}/>
    </div>
  );
}
}


)()}

</div>
</div>
);


}

}
export default Search;
