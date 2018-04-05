import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    if(this.props.message){
      let {eventData} = this.props.message;
      console.log(eventData);
      return (            
        <div>
          <p>{eventData.sensorBlueToothID}</p>
          <table className="table">
            <tbody>
            {
              eventData.sensorEventLogs.map((v,i)=>{
                return(
                  <tr key={i}>
                    <td>{v.timeStamp}</td>
                    <td>{v.type}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      );
    }else{
      return (            
        <div></div>
      );      
    } 
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
