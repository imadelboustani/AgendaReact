import React from 'react';
import logo from './logo.svg';
import Activite from './activite/activite'
import './App.css';


class App extends React.Component {
  constructor(props) {
   super(props);
    this.state = {val: '', activities: ['lundi', 'mardi']};
 this.handleChange = this.handleChange.bind(this);
 this.hanldleSubmit = this.hanldleSubmit.bind(this);

  }
  handleChange(event)  {
     this.setState({val: event.target.value});
     event.preventDefault();
  };
  hanldleSubmit(event) {
      console.log(this.state.val);
      let listOfActivities = this.state.activities.slice();
          listOfActivities.push(this.state.val);
      this.setState({activities: listOfActivities });
      event.preventDefault();

  }


  handleHtmlSubmit = (event) => { event.preventDefault(); console.dir(this.refs.name.value); }
render() {
  return (<div className="row mb-5 ">
      { this.state.activities.map(val => <div className="col-3"> <Activite activiteName={val}></Activite> </div>)}

    <div className="col-3  ">
      <div className="card" >
        <div className="card-body bg-light">
          <form onSubmit={this.hanldleSubmit} >
            <div className="form-group "  >
              <label htmlFor="exampleFormControlInput1">Create Card </label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="val" value={this.state.val} onChange={this.handleChange}/>
            </div>
            <div className="text-center"> <button className="btn btn-primary"  > create </button> </div>
          </form>

        </div>
      </div>
    </div>
  </div>);
}

}
export default App;
