import React, { useEffect, useState } from "react";
import { getAllUser } from "../../api";

import { CustomTable } from "../../component";
import { DUMMY_DATA } from "./constant";

const Home = () => {
    const [users, setUsers] = useState([]);

    const getUser = async () => {
        try {
            const response = await getAllUser();
            const { data } = response;
            const { status, data: user } = data;
            console.log(user, status);
            if (status === 200) {
                setUsers(user)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser();
    }, [users])

    return (
        <CustomTable data={users} />
    )
};

export default Home;
