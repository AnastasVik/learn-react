import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
    children: string;
    off: boolean;
}

function Button(props: ButtonProps) {
    return (
        <button className={styles["button"]} disabled={props.off}>
            {props.children}
        </button>
    );
}

export default Button;
