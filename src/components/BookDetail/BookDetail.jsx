import { useParams } from "react-router-dom";

const BookDetail = () => {
    // Amra chaile params diye book id ta niye nite pari -> useParams call korle Return korbe full ekta object
    // const param = useParams();
    // console.log(param);
    
    // Amra chaile destructuring kore bookId ta nite pari, Since Full ekta object disse, ei object theke ppt nite hoile emon ta kori
    const { bookId }= useParams();
    console.log(bookId);

    return (
        <div>
            <h2>Book Details: {bookId}</h2>
        </div>
    );
};

export default BookDetail;