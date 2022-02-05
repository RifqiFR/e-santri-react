import React from "react";
// reactstrap components
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Media,
  Nav,
  Navbar,
  UncontrolledDropdown,
} from "reactstrap";
import { MdHttps } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoMdExit, IoMdNotifications } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import { removeToken } from "utils/auth";
import { GET_SELF, JWT_HEADER } from "constants/urls";
import axios from "axios";
import ModalShowChangePassword from "components/ModalChangePassword";

const Header = () => {
  const [role, setRole] = React.useState("");
  const [name, setName] = React.useState("");
  const [healthAgency, setHealthAgency] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();

  const changePassword = () => {
    setModalShow(true);
  };

  // React.useEffect(() => {
  //   axios
  //     .get(GET_SELF(), {
  //       headers: { Authorization: `Bearer ${JWT_HEADER}` },
  //     })
  //     .then((res) => {
  //       setRole(res.data.data.role);
  //       setName(res.data.data.name);
  //       setHealthAgency(res.data.data.health_agency.name);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const onLogout = () => {
    removeToken();
    history.replace("/");
  };
  const toProfile = () => {
    history.push({
      pathname: "/admin/profile",
    });
  };

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/pasien"
          />
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div className="text-white font-weight-bold mr-2">
              {role ? role + " at " + healthAgency : ""}
            </div>
            <FormGroup className="mb-0">
              {/* <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup> */}
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex py-2" navbar>
            {/* <UncontrolledDropdown nav>
              <DropdownToggle nav className="nav-link-icon">
                <i className="ni ni-bell-55" />
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="navbar-default_dropdown_1"
                className="dropdown-menu-arrow"
                right
              >
                <DropdownItem>Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <div className="mr-2">Admin</div>
            <IoMdNotifications size={24} className="cursor-pointer" />
          </Nav>
        </Container>
      </Navbar>
      {modalShow && (
        <ModalShowChangePassword
          centered
          show={modalShow}
          closable={true}
          message="Ganti Password"
          onHide={() => setModalShow(false)}
        />
      )}
      <div className="header navbar-admin pb-8 pt-8 pt-lg-8" style={{}}>
        <Container fluid>
          <div className="header-body">{/* Card stats */}</div>
        </Container>
      </div>
    </>
  );
};

export default Header;
