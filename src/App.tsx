import React from "react";

import MyInput from "./components/MyInput/MyInput";
import Button from "./components/Button/Button";

function App() {
    return (
        <div className="App">
            <MyInput value="Привет АХАХАХА!" off={false} />
            <Button off={false}>Привет мир!</Button>
        </div>
    );
}

export default App;
