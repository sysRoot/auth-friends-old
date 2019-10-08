import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Nav = props => {
    const [active, setActive] = useState("home");

    const handleItemClick = (e, { name }) => setActive({ activeItem: name });

    const { activeItem } = active;

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="friends"
                    active={activeItem === "friends"}
                    onClick={handleItemClick}
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        name={!props.isLoggedIn ? 'Login' : 'Logout' }
                        active={activeItem === "login"}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default Nav;
