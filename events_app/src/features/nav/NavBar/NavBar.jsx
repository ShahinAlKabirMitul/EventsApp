import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';

const actions = {
  openModal,
  logout,
};

const mapState = state => ({
  auth: state.auth,
});

class NabBar extends Component {
  handelSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handelRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handelSignOut = () => {
    this.props.logout();
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    const  authenticated  = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                floated="right"
                as={Link}
                to="/createevent"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu
              currentUser={auth.currentUser}
              signOut={this.handelSignOut}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handelSignIn}
              register={this.handelRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect( mapState, actions)(NabBar));
