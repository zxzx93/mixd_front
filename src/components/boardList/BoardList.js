import React from "react";
import { Link } from "react-router-dom";

function BoardList({ lists, url, match, mem_level }) {
    //console.log(url);
    // console.log(lists);
    // console.log(mem_level);
    console.log(url);
    console.log(lists);

    return (
        <div>
            {lists.map((data) => (
                <Link
                    to={`${
                        url === "/notice/unconfirm"
                            ? `/notice/unconfirm/${data.bit_id}`
                            : `/notice/view/${data.bit_id}`
                    }`}
                    key={data.bit_id}
                >
                    <div className="board_list">
                        <div>
                            {data.title}
                            <span>
                                {data.regdate
                                    .substring(0, 10)
                                    .replaceAll("-", ".")}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BoardList;
