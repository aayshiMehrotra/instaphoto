import {connect} from 'react-redux';
import MainComponent from './MainComponent';
import {bindActionCreators} from 'redux';
import * as  actions  from '../actions/actions';
import {
  withRouter
} from 'react-router-dom';
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments : state.comments
    }
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);

}
const App = connect(mapStateToProps,mapActionsToProps)(MainComponent);
export default withRouter(App);