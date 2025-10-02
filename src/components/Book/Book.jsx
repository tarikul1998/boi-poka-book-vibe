import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-blue-200 py-8 rounded-2xl">
                    <img
                        className="h-[166px]"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-4">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-800">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    {/* <div className="divider">OR</div> */}
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;

// Prottekta image height nibe 166px and alt dibo bookName dynamic.
// Then image er paremt Figure er moddhe bg-color/vertical padding set korbo
// Then overall card er moddhe padding disi and Figure ke rounded korsi
