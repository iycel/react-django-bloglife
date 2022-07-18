import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <div className="container py-4 mt-3">
                {/* <header className="pb-3 mb-4 border-bottom">
                    <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <span className="fs-4">BLOG</span>
                    </Link>
                </header> */}

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Welcome to Blog Life</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <Link className="btn btn-primary btn-lg" type="button" to='/blog'>Check Out</Link>
                    </div>
                </div>
                <footer className="pt-3 mt-4 text-muted border-top">
                    &copy; 2022
                </footer>
            </div>
        </main>
    )
}

export default Home