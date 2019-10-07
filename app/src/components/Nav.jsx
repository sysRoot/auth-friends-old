import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";

const Nav = props => {
    const [active, setActive] = useState("home");

    handleItemClick = (e, { name }) => setActive({ activeItem: name });

    const { activeItem } = this.state;

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name="friends"
                    active={activeItem === "friends"}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        name={isLoggedIn}
                        active={activeItem === "login"}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>

            <Segment>
                <img src="/images/wireframe/media-paragraph.png" />
            </Segment>
        </div>
    );
};

export default Nav;
