import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = props => {
      const { alerts } = props;

      return (
           <Fragment>
                  <style jsx>
                    {`
                   
                    .text-center {
                      text-align: center;
                    }
                .alert {
                      padding: 0.8rem;
                      /* margin: 1rem 0; */
                      display: inline-block;
                      background-color: green;
                      color: #fff;
                      position: fixed;
                      right: 1rem;
                      top: 11rem;
                      // bottom: 6rem;
                      padding: 0.4rem 1.3rem;
                      font-size: 1rem;
                      border: none;
                      margin-right: 0rem;
                      outline: none;
                      border-radius: 1em;
                      z-index: 9999999999999999;
                    
                    }
                
                    .alert-primary {
                      background: #3da676;
                      color: #fff;
                    }
                    .alert-light {
                      background: #343a40;
                      color: #333;
                    }
                    .alert-danger {
                      background: #dc3545;
                      color: #fff;
                    }
                    .alert-success {
                      background-color: green;
                      color: #fff;
                    }
                    `}
                  </style>
                  {alerts !== null && alerts.length > 0 && alerts.map((alert) => (
                      <p key={alert.id} className={`alert  alert-${alert.alertType}`}>
                              { alert.msg }
                      </p>
                  ))}
                 
           </Fragment>
      )
}

Alert.propTypes = {
   alerts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
      alerts: state.alert
})
export default connect(mapStateToProps)(Alert);
