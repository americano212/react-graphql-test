import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

const GET_CONTINENTS = gql`
    query {
        SocialUser(SOCIAL_USER_PK: 1) {
            SOCIAL_USER_ID
            SOCIAL_USER_NICKNAME
        }
    }
`;

function QueryTest() {
    const { loading, error, data } = useQuery(GET_CONTINENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return data.SocialUser.map(({ SOCIAL_USER_ID, SOCIAL_USER_NICKNAME }) => (
        <div key={SOCIAL_USER_ID}>
            <h3>{SOCIAL_USER_NICKNAME}</h3>
            <p>{SOCIAL_USER_ID}</p>
            <br />
        </div>
    ));
}

export default QueryTest;
