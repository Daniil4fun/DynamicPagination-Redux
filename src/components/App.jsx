import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import '../App.css';

function App() {

    let dispatch = useDispatch();
    let posts = useSelector(state => state.posts.posts);
    let currentPage = useSelector(state => state.currentPage.currentPage);

    let [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (fetching) {
            axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${currentPage}`)
                .then(response => {
                    dispatch({ type: "ADD_POSTS", payload: response.data })
                    dispatch({ type: "CHANGE_PAGE", payload: 1 })
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    function scrollHandler(event) {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <div className="App">
            {posts.map(post => {
                return <div key={post.id} className="post">{post.title}</div>
            })}
        </div>
    )
}

export default App;