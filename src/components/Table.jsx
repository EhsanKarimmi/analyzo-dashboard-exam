import React, { useEffect, useState } from "react";
import { storeData } from "../db/storeData";
import { tableHeader } from "../db/tableHeadersData";

function Table() {
    const [sortKey, setSortKey] = useState("");
    const [sortOrder, setSortOrder] = useState("default");
    const [searchTerm, setSearchTerm] = useState("");
    const [usersData, setUsersData] = useState(storeData);

    // show data according to user search input.
    const searchDataResult = () => {
        if (searchTerm.length > 0 && searchTerm !== "") {
            setUsersData(
                usersData.filter((data) => {
                    return data?.section?.includes(searchTerm);
                })
            );
        } else {
            setUsersData(storeData);
        }
    };
    // change sort order between `asc` and `desc`.
    const changeSortOrder = (colId) => {
        if (sortKey === colId) {
            if (sortOrder === "default") {
                setSortOrder("asc");
            } else {
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
            }
        }
    };

    // sort table `asc` and `desc`
    const sortTable = (id) => {
        setSortKey(id);
        changeSortOrder(id);
        const sortData = usersData.sort((a, b) => {
            if (sortKey !== "") {
                if (sortOrder === "asc") {
                    return a.section >= b.section ? 1 : -1;
                } else {
                    return a.section <= b.section ? 1 : -1;
                }
            }
        });
        setUsersData(sortData);
    };

    useEffect(() => {
        searchDataResult();
    }, [searchTerm]);

    // ! debug...
    console.log(sortOrder);
    return (
        <div className="my-10 border border-zinc-300 p-5 rounded-md">
            {/* search input */}
            <div className="mb-3 flex justify-center items-center">
                <input
                    type="text"
                    placeholder="جستجو"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    className="w-1/3 border-2  border-zinc-300 rounded-md px-2 py-1 outline-none"
                />
            </div>
            <table className="w-full table-fixed rounded-md border border-zinc-300">
                {/* table header */}
                <thead className="text-lg font-medium ">
                    <tr className="border-b-2 border-zinc-300 ">
                        {tableHeader.map((col) => {
                            return (
                                <th
                                    key={col.id}
                                    onClick={() => sortTable(col.id)}
                                    className="border-x border-zinc-300 cursor-pointer hover:bg-zinc-300 transition-all duration-200"
                                >
                                    <div className="flex justify-start items-center gap-2">
                                        <span>{col.label}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={3}
                                            stroke="currentColor"
                                            className={`w-4 h-4 transition-all duration-100 ${
                                                sortKey === col.id ? "scale-100" : "scale-0"
                                            } ${
                                                sortOrder === "asc"
                                                    ? `rotate-180`
                                                    : `rotate-0`
                                            }`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                            />
                                        </svg>
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                {/* table body */}
                {/* data is coming from src\db\storeData.js file*/}
                <tbody className="text-base font-medium">
                    {usersData?.map((data, index) => {
                        return (
                            <tr key={index} className="border-b border-zinc-300">
                                <td>{data.section}</td>
                                <td>{data.totalCustomers}</td>
                                <td>{data.lastPurchase}</td>
                                <td>{data.numberOfPurchases}</td>
                                <td>{data.purchaseAmount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
