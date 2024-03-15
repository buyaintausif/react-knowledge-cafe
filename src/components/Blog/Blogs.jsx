import { useEffect } from "react";
import { useState } from "react";

import Bloog from "../Bloog/Bloog";


const Blogs = () => {

    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])



    return (
        <div className="md:w-2/3">
            <h2>Blog:{blogs.length}</h2>

            {
                blogs.map(blog => <Bloog blog={blog} key={blog.id} ></Bloog>)
            }
        </div>
    );
};

export default Blogs;