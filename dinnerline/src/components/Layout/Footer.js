import * as React from "react";
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    render() {
        return <h2>Footer</h2>;
    }
}
export default Footer;