import axios from "axios";

const GetGithub = async (username: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: "token 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",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("error");
    }
};

export default GetGithub;
