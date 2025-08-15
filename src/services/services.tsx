import axios from "axios";

const GetGithub = async (username: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `token ${process.env.TOKEN_GITHUB}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("error");
    }
};

export default GetGithub;
