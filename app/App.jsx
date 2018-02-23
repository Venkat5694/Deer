import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from './actions';
import AddNote from './containers/add-note';
import NoteList from './containers/note-list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddNote />
        <NoteList />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ notes }) {
  return { notes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ACTIONS, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  App
);
