import React, { useCallback, useContext, useEffect, useState } from "react";

import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import Filters from "../components/Filters";
import PetCards from "../components/PetCards";
import Pagination from "../components/Pagination";
import PetsContext from "../context/Pets/main";
import Loader from "../components/Loader";

import { getParameterByName } from "../utilities/main";

const Search = () => {
    document.title = "Search";
    const setData = useContext(PetsContext)[1];
    const [loading, setLoading] = useState(false);

    const getPets = useCallback(async () => {
        const pageParam = getParameterByName("page");
        const page = pageParam ? `?page=${pageParam}` : "?page=1";
        console.log(page);
        const res = await fetch("/pets" + page);
        return res.json();
    });

    useEffect(() => {
        setLoading(true);
        getPets().then(res => {
            setData(prevState => {
                return {
                    ...prevState,
                    pets: res.data,
                    links: res.links
                };
            });
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <Layout tabTitle="Search">
            <div className="container">
                <div className="row mt-5 mb-3">
                    <SearchInput />
                </div>

                <div className="row my-3">
                    <Filters />
                </div>

                <div className="row">
                    <PetCards />
                </div>

                <div className="row">
                    <div className="col-12 mx-auto my-5">
                        <Pagination />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
