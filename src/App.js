import "./App.css";
import { useMutation, gql, useQuery } from "@apollo/client";

import QueryTest from "./components/QueryTest";
import MutationTest from "./components/MutationTest";
function App() {
    return (
        <div className="App">
            <h1>React + Apollo Client</h1>
            <QueryTest />
            <MutationTest />
        </div>
    );
}

export default App;
