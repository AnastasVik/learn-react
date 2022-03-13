import React, { useState } from "react";

function App() {
    const [hahaLol, setHahaLol] = useState("ХАХА ЛОЛ!");

    return (
        <div className="App">
            <h1>{hahaLol}</h1>
            <input
                type="text"
                defaultValue={hahaLol}
                onChange={(e) => {
                    setHahaLol(e.target.value);
                }}
            />
        </div>
    );
}

export default App;
