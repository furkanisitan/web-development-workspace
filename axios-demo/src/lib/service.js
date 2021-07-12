import axios from "axios";

const getData = async (userId) => {

    const user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)).data;
    const posts = (await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).data;

    return { ...user, posts };
};

export default getData;