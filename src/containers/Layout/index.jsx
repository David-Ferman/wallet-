import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Topbar from './topbar/Topbar';

import { changeThemeToDark, changeThemeToLight } from '../../redux/actions/themeActions';
//import Sidebar from "./sidebar/Sidebar";

class Layout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };


  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
  };

  render() {


    return (
      <div >
        <Topbar
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          changeSidebarVisibility={this.changeSidebarVisibility}
        />

      </div>
    );
  }
}

export default withRouter(connect(state => ({
  sidebar: state.sidebar,
}))(Layout));
