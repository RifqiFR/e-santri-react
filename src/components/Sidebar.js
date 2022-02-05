/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Modal,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import { removeToken } from "utils/auth";
import puskesmasIcon from "images/admin/puskesmas.png";
import clinicIcon from "images/admin/clinic.png";
import listIcon from "images/admin/list.png";
import qrScan from "images/admin/search.png";
import infoAbout from "images/admin/info.png";
import { ImExit } from "react-icons/im";
import { GLOBAL_ICON_SIZE } from "constants/sidebar_contents";
import { IoMdExit } from "react-icons/io";
import { AuthContext } from "context/auth_context";

class Sidebar extends React.Component {
  static contextType = AuthContext;
  state = {
    collapseOpen: false,
    logoutModalOpen: false,
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: this.state.collapseOpen == true ? false : true,
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false,
    });
  };
  onLogout = () => {
    removeToken();
    this.context.setIsLogin(false);
    this.props.history.push("/");
  };
  closeLogoutModal = () => {
    this.setState({
      logoutModalOpen: false
    })
  };
  openLogoutModal = () => {
    this.setState({
      logoutModalOpen: true
    })
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };
  render() {
    const { bgColor, routes, logo, content } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link,
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank",
      };
    }
    return (
      <>
        <Modal
          isOpen={this.state.logoutModalOpen}
        >
          <ModalBody>
            <div className="p-4">
              <p className="h2 text-center">Apakah anda yakin akan logout?</p>
              <img src={require('../images/logout.png')} className="d-block w-25 mx-auto my-4" alt="logout" />
              <div className="d-flex justify-content-center">
                <Button
                  color="danger"
                  onClick={this.onLogout}
                >
                  Ya
                </Button>
                {' '}
                <Button 
                  color="secondary"
                  onClick={this.closeLogoutModal}>
                  Tidak
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
        <Navbar
          className="navbar-vertical fixed-left navbar-light bg-white"
          expand="md"
          id="sidenav-main"
        >
          <Container fluid>
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Brand */}
            {logo ? (
              <NavbarBrand className="pt--4" {...navbarBrandProps}>
                <img
                  alt={logo.imgAlt}
                  className="navbar-brand-img"
                  src={logo.imgSrc}
                />
              </NavbarBrand>
            ) : null}
            <Collapse navbar isOpen={this.state.collapseOpen}>
              {/* Collapse header */}
              <div className="navbar-collapse-header d-md-none pt--4">
                <Row>
                  {logo ? (
                    <Col className="collapse-brand" xs="6">
                      {logo.innerLink ? (
                        <Link to={logo.innerLink}>
                          <img alt={logo.imgAlt} src={logo.imgSrc} />
                        </Link>
                      ) : (
                        <a href={logo.outterLink}>
                          <img alt={logo.imgAlt} src={logo.imgSrc} />
                        </a>
                      )}
                    </Col>
                  ) : null}
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={this.toggleCollapse}
                    >
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              {/* Form */}
              <Form className="mt-4 mb-3 d-md-none">
                <InputGroup className="input-group-rounded input-group-merge">
                  <Input
                    aria-label="Search"
                    className="form-control-rounded form-control-prepended"
                    placeholder="Search"
                    type="search"
                  />
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <span className="fa fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
              {/* Navigation */}
              {/* <Nav navbar>{this.createLinks(routes)}</Nav> */}
              {/* Divider */}
              <hr className="my-3" />
              {/* Heading */}
              <h6 className="navbar-heading text-muted">Menu</h6>
              {/* Navigation */}
              <Nav className="mb-md-3" navbar>
                <Row className="d-flex justify-content-center">
                  {content.map(menu => (
                    <Col key={menu.name} lg={12} md={12} sm={12} xs={12}>
                      <NavItem>
                        <Link
                          className=" nav-link"
                          style={{ fontWeight: "600" }}
                          to={menu.path}
                        >
                          {menu.icon}
                          <NavLink>{menu.name}</NavLink>
                        </Link>
                      </NavItem>
                    </Col>
                  ))}
                  <Col lg={12} md={12} sm={12} xs={12} className="cursor-pointer" onClick={this.openLogoutModal}>
                    <NavItem>
                      <div className="nav-link" style={{ fontWeight: "600" }}>
                        <IoMdExit size={GLOBAL_ICON_SIZE} />
                        <NavLink>Logout</NavLink>
                      </div>
                    </NavItem>
                  </Col>
                </Row>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
  content: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
