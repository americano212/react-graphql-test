import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

const REGISTER_MUTATION = gql`
    mutation AddUser(
        $socialUserId: Int!
        $socialUserNickname: String!
        $userLoginType: String!
        $socialUserImage: String
        $socialUserThumbnail: String
        $socialUserEmail: String
        $socialUserAgeRange: String
        $socialUserGender: String
        $userPhone: String
        $userEmail: String
        $userGrade: Int
    ) {
        addUser(
            SOCIAL_USER_ID: $socialUserId
            SOCIAL_USER_NICKNAME: $socialUserNickname
            USER_LOGIN_TYPE: $userLoginType
            SOCIAL_USER_IMAGE: $socialUserImage
            SOCIAL_USER_THUMBNAIL: $socialUserThumbnail
            SOCIAL_USER_EMAIL: $socialUserEmail
            SOCIAL_USER_AGE_RANGE: $socialUserAgeRange
            SOCIAL_USER_GENDER: $socialUserGender
            USER_PHONE: $userPhone
            USER_EMAIL: $userEmail
            USER_GRADE: $userGrade
        )
    }
`;

function MutationTest() {
    const [mutateFunction, { data, loading, error }] =
        useMutation(REGISTER_MUTATION);
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
