import React from "react";
type WelcomeProps = {
    name?: string;
};
const Welcome = (props: WelcomeProps) => {
    return <div>Hello {props.name}</div>;
};

export default Welcome;
