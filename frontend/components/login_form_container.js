import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from  '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'login',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);