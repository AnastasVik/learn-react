import React, { useState } from "react";

interface MyInputProps {
    value: string;
    off: boolean;
}

function MyInput(props: MyInputProps) {
    const [hahaLol, setHahaLol] = useState<string>(props.value);

    return (
        <div>
            <h1>{hahaLol}</h1>
            <input
                type="text"
                defaultValue={hahaLol}
                onChange={(e) => {
                    setHahaLol(e.target.value);
                }}
                disabled={props.off}
            />
        </div>
    );
}

export default MyInput;
