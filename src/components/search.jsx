import React from "react";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a User"/>
            </div>
            <div className="userChat">
                <img src="https://static.miraheze.org/bluearchivewiki/thumb/6/63/Shiroko.png/266px-Shiroko.png" alt="" />
                <div className="userChatInfo">
                    <span>Shigemi</span>
                </div>
            </div>
        </div>
    )
}

export default Search