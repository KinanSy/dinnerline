import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const headerFrameCss = css`
    display:flex;
    height: 7vh;
    width: 100%;
    align-items:center;
    justify-content:center;
    box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.2);
    font-size:2vh;
    font-weight:bold;
    margin-bottom:20px;
    border-bottom:1px rgba(0, 0, 0, 0.2) solid;
`;

const headerConCss = css`
    height:70%;
    width: 95%;
    display:flex;
    align-items:center;
`

const headerLeftCon = css`
    flex:1;
    text-align:left;

`

const headerRightCon = css`
    flex:4;
    text-align: center;
`

const centerChildren = css`
    height:100%;
    align-items:center;
`

const logoCss = css`
    height:5vh;
`

const navbarIconsFrameCss = css`
    flex:1;
`
const linksConCss = css`
    display: flex;
    justify-content: space-around;
    width:80%
`

const navBarFrameCss = css`
    display: flex;
`
const navBarConCss = css`
    flex:4;
`
const navbarIconsConCss = css`
    display:flex;
    justify-content: right;
    width:80%;
    
    ion-icon{
        margin-left: 20px;
        font-size:1.5rem;
    }
`

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    
    render() {
        return <div css={headerFrameCss}>
            <div css={headerConCss}>
                <div css={headerLeftCon}>
                    <div css={centerChildren}>
                        <img src="../../assets/images/logo/logo.svg" css={logoCss}/>
                    </div>
                </div>
                <div css={headerRightCon}>
                    <div css={centerChildren}>
                        <div css={navBarFrameCss}>
                            <div css={navBarConCss}>
                                <div css={css`display:flex; justify-content:center;`}>
                                    <div css={linksConCss}>
                                        <Link to="/">Menu</Link>
                                        <Link to="/">Restaurant</Link>
                                        <Link to="Contact">Contact</Link>
                                    </div>
                                </div>
                            </div>
                            <div css={navbarIconsFrameCss}>
                            <div css={css`display:flex; justify-content:center;`}>
                                    <div css={navbarIconsConCss}>
                                        <a href="#"><ion-icon name="cart"></ion-icon></a>
                                        <a href="#"><ion-icon name="menu"></ion-icon></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default Header;