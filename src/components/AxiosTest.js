const axios = require("axios");

const GetQuery = async (endpoint, token) => {
    try {
        const data = await axios.post(
            endpoint,
            {
                query: `mutation AddLegWork($data: Input_LegWork!) {
                    addLegWork(data: $data)
                }`,
                variables: {
                    data: {
                        USER_FK: 5,
                        CL_FK: 1,
                    },
                },
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            }
        );
        console.log(data);
        return data.status === 200 ? data.data : "error";
    } catch (error) {
        return error;
    }
};

export default GetQuery;
