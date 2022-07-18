import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const BlogDetail = () => {
    const [blog, setBlog] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const slug = id;
        const fetchData = async () => {
            try {
                const res = await axios
                    .get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data)
            } catch (error) {

            }
        }
        fetchData()
    }, [id])

    const createBlog = () => {
        return { __html: blog.content }
    }

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{blog.title}</h1>
            <h2 className='text-muted mt-3'>{capitalizeFirstLetter(blog.category)} Category</h2>
            <h4 className='mt-3'>{blog.month} {blog.day}</h4>
            <div className='mt-5 mb-5 container' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5'><Link to='/blog' className='text-dark fw-bold text-decoration-none'>Back to Blogs</Link></p>
        </div>
    )
}

export default BlogDetail