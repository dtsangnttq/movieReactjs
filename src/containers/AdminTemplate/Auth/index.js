import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLoginAPI } from '../Auth/modules/actions';
import Loader from '../../../components/Loader';
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: '',
      matKhau: '',
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.LoginAPI(this.state, this.props.history);
    // console.log(this.props);s
  };
  renderNoti = () => {
    const { error } = this.props;
    if (error) {
      return <div className='alert alert-danger'>{error.response.data}</div>;
    }
  };
  render() {
    const { loadding } = this.props;
    if (loadding) return <Loader />;
    return (
      <div className='container'>
        <div className='col-md-6 mx-auto'>
          <h3>Authentication Page Login</h3>
          <form onSubmit={this.handleLogin}>
            {this.renderNoti()}
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Username</label>
              <input
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter Username'
                name='taiKhoan'
                onChange={this.handleOnChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
                name='matKhau'
                onChange={this.handleOnChange}
              />
            </div>

            {/* {this.props.data ? (
              <div class='alert alert-primary' role='alert'>
                Login Successfull
              </div>
            ) : (
              <>
                <div class='alert alert-primary' role='alert'>
                  password or username incorrect
                </div>
              </>
            )} */}
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProp = (state) => ({
  data: state.authReducer.data,
  error: state.authReducer.err,
});
const mapDispatchToProps = (dispatch) => ({
  LoginAPI: (user, history) => {
    dispatch(actLoginAPI(user, history));
  },
});
export default connect(mapStateToProp, mapDispatchToProps)(Authentication);
