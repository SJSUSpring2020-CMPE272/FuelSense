import React from "react";

class TopNav extends React.Component {
  onSideBarOpen = (event) => {
    this.props.onClick(true);
  };

  render() {
    return (
      <nav
        className='navbar navbar-default'
        style={{ backgroundColor: "#e6e6e6" }}
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6' style={{ marginLeft: 0 + "px" }}>
              <button
                type='button'
                id='sidebarCollapse'
                className='navbar-toggle'
                onClick={this.onSideBarOpen}
              >
                <i className='fa fa-bars' aria-hidden='true'></i>
              </button>
            </div>
            <div className='col-xs-6'>
              <a href='index.html' className='navbar-brand navbar-brand-custom'>
                <h3>FuelSense</h3>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='custom-profile'>
              <div className='dropdown dropdown-profile'>
                <a className='' data-toggle='dropdown' href='#'>
                  <img
                    src='img/profile-pic.png'
                    alt='Image Description'
                    className='profile-icon'
                    style={{ borderRadius: 22.5 + "px" }}
                  />
                </a>
                <ul className='dropdown-menu dropdown-myprofile'>
                  <li className='profile-heading'>
                    <img
                      src='img/profile-pic.png'
                      alt='Image Description'
                      className='profile-icon'
                      style={{ borderRadius: 22.5 + "px" }}
                    />
                    Welcome <span style={{ color: "#007bff" }}>Pranav</span>
                  </li>
                  <li>
                    <a href='#'>My Profile</a>
                  </li>
                  <li>
                    <a href='#'>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='custom-profile-2'>
              <div className='dropdown dropdown-profile'>
                <a className='' data-toggle='dropdown' href='#'>
                  <i
                    className='fa fa-ship'
                    aria-hidden='true'
                    style={{ color: "#000" }}
                  ></i>
                </a>
                <ul className='dropdown-menu dropdown-icons'>
                  <li className='dropdown-heading'>My Fleet</li>
                  <div className='row'>
                    <li className='custom-icons'>
                      <a href='#'>123445- AZUL LIBERO</a>
                    </li>
                  </div>
                  <div className='row'>
                    <li className='custom-icons'>
                      <a href='#'>149045- BALTIC WOLF</a>
                    </li>
                  </div>
                  <div className='row'>
                    <li className='custom-icons'>
                      <a href='#'>986404- BULK SPAIN</a>
                    </li>
                  </div>
                  <div className='row'>
                    <li className='custom-icons'>
                      <a href='#'>364021- DARYA DEVI</a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className='custom-profile-3'>
              <div className='dropdown dropdown-profile'>
                <a className='' data-toggle='dropdown' href='#'>
                  <i
                    className='fa fa-bell'
                    aria-hidden='true'
                    style={{ color: "black" }}
                  >
                    {" "}
                  </i>
                </a>
                <ul className='dropdown-menu dropdown-notification'>
                  <li className='dropdown-heading'>NOTIFICATIONS</li>
                  <li className='custom-notifications'>
                    <a href='#'>You have new service lined up</a>
                    <br />
                    <span className='noti-time'>1 days ago</span>
                  </li>
                  <li className='custom-notifications'>
                    <a href='#'>You have new wheel changed lined up</a>
                    <br />
                    <span className='noti-time'>1 days ago</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='custom-profile-4'>
              <div className='dropdown dropdown-profile'>
                <a className='' data-toggle='dropdown' href='#'>
                  <i
                    className='fa fa-line-chart'
                    aria-hidden='true'
                    style={{ color: "black" }}
                  ></i>
                </a>
                <ul className='dropdown-menu dropdown-notification'>
                  <li className='dropdown-heading'>NOTIFICATIONS</li>
                  <li className='custom-notifications'>
                    <a href='#'>You have new service lined up</a>
                    <br />
                    <span className='noti-time'>1 days ago</span>
                  </li>
                  <li className='custom-notifications'>
                    <a href='#'>You have new wheel changed lined up</a>
                    <br />
                    <span className='noti-time'>1 days ago</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
