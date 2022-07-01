import "./App.css";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_CONTINENTS = gql`
    query {
        SocialUser(SOCIAL_USER_PK: 1) {
            SOCIAL_USER_ID
            SOCIAL_USER_NICKNAME
        }
    }
`;
function App() {
    return (
        <div className="App">
            <h1>React + Apollo Client</h1>
            <Query query={GET_CONTINENTS}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error!</p>;
                    console.log(data.SocialUser);
                    return (
                        <ul>
                            {data.SocialUser.map(
                                ({ SOCIAL_USER_ID, SOCIAL_USER_NICKNAME }) => (
                                    <li key={SOCIAL_USER_ID}>
                                        {SOCIAL_USER_NICKNAME}
                                        {SOCIAL_USER_ID}
                                    </li>
                                )
                            )}
                        </ul>
                    );
                }}
            </Query>
        </div>
    );
}

export default App;
