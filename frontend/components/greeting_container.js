import { connect } from 'react-redux';
import {logoutUser} from '../actions/session_actions'
import Greeting from './greeting';

const mapStateToProps = ({ entities, session }, ownProps) => {
  currentUser: entities.users[session.id]
};

const mapDispatchToProps = (dispatch) => {
  logout: () => dispatch(logoutUser())
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
