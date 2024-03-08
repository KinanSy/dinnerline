import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const contactCss = css`
    display:flex;
    justify-content:center;
    flex-direction:column;
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div css={contactCss}>
            <img src="../assets/images/restaurant/restaurant1.jpg" css={css`width:100%;`}/>
            <div>
                <div><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Av.%20de%20Valmont%2030,%201014%20Lausanne+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </div>
        </div>;
    }
}
export default Home;