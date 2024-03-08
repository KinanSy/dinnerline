import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Menu from "./Menu";
const HomeConCss = css`
    display:flex; 
    justify-content:center;
    width:100%;
`;
const HomeCss = css`width:90%`;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    render() {
        return <div css={HomeConCss}>
            <div css={HomeCss}>
                <Menu></Menu>
            </div>
        </div>;
    }
}
export default Home;