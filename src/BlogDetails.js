import Bloglist from './Bloglist';
import useFetch from './useFetch';
import {useParams,useHistory} from 'react-router-dom';
const BlogDetails = () => {
    const history= useHistory();
    const {id} = useParams();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const handleClick =() =>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE',
        }).then(() =>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <div>{blog.body}</div>
            </article>
           )}
           <button onClick ={handleClick}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;