import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
                console.log(res.data)
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(res.data);
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getBlogs = () => {
        let list = [];
        let result = []
        blogs.map((blogPost) => {
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width={'200'} height={'250'} style={{ objectFit: 'cover' }} src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            )

        }
        return result;
    }

    return (
        <div className='container mt-3'>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/world">World</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/environment">Environment</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/technology">Technology</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/desing">Design</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/culture">Culture</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/business">Business</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/politics">Politics</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/opinion">Opinion</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/sicence">Science</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/health">Health</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/style">Style</Link>
                    <Link className="p-2 link-secondary text-decoration-none" to="/category/travel">Travel</Link>
                </nav>
                <div className="p-5 mb-4 bg-dark text-white rounded-3 mt-4 ">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">{featuredBlog.title}</h1>
                        <p className="col-md-8 fs-4">{featuredBlog.excerpt}</p>
                        {/* <Link className="btn btn-primary btn-lg" type="button" to={`/blog/${featuredBlog.slug}`}>Continue Reading</Link> */}
                        <Link className="text-white text-decoration-none fw-bold fs-4" to={`/blog/${featuredBlog.slug}`}>Continue Reading ...</Link>
                    </div>
                </div>
            </div>
            {getBlogs()}
        </div>
    )
};

export default Blog;