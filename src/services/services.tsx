import axios from "axios";

const GetGithub = async (username: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: process.env.TOKEN_GITHUB, // Use environment variable for token
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("error");
    }
};

export default GetGithub;
