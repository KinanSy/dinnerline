import { Outlet } from "react-router-dom"
import Header from "./Layout/Header"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "./Layout/Footer"

const layoutCss = css`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:row;
`;

const mainCon = css`
    display:flex;
    width:90%;
    flex-direction: column;
`
const headerConCss = css`
    flex:1;
`
const OutletConCss = css`
    flex:9;
`
const FooterConCss = css`
    flex:1;
`
export default function Layout() {

    return (
        <div css={layoutCss}>
            <div css={mainCon}>
                <div css={headerConCss}>
                    <Header />
                </div>
                <div css={OutletConCss}>
                    <div css={css`display:flex; width:95%;`}>
                        <Outlet css={css`width:100%`} />
                    </div>
                </div>
                <div css={FooterConCss}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}