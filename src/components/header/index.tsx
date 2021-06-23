import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

// Types
import { MenuItem } from "types/menu";

// Styles
import styles from "./header.module.sass";

type HeaderComponentProps = {
  menuItems: MenuItem[]
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ menuItems }: HeaderComponentProps): JSX.Element => {
  return (
    <Navbar className={styles.mainmenu} color="light" light>
      <Nav>
        {menuItems.map((item) => (
          <NavItem key={item.id}>
            <Link className="nav-link" to={item.link}>
              {item.text}
            </Link>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
}

export default HeaderComponent;
