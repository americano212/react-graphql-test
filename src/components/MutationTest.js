import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

const POST_MUTATION = gql`
    mutation Mutation(
        $socialUserId: Int!
        $socialUserNickname: String!
        $userLoginType: String!
    ) {
        addUser(
            SOCIAL_USER_ID: $socialUserId
            SOCIAL_USER_NICKNAME: $socialUserNickname
            USER_LOGIN_TYPE: $userLoginType
        )
    }
`;

function MutationTest() {
    const [mutateFunction, { data, loading, error }] =
        useMutation(POST_MUTATION);
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    {
                        mutateFunction({
                            variables: {
                                socialUserId: 33333,
                                socialUserNickname: "wqeqweqw",
                                userLoginType: "KAKAO",
                            },
                        });
                    }
                }}
            >
                <button type="submit">ADD USER</button>
            </form>
        </div>
    );
}

export default MutationTest;
