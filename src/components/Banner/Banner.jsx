import bannerImg from '../../assets/books.jpg'

const Banner = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Read Books</h1>
                    <br />
                    <button className="btn btn-success">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;