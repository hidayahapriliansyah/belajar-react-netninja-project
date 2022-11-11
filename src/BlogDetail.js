import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetail = () => {
  const { id } = useParams();
  // const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/' + id );
  const {error, isPending, data: blog} = useFetch('http://localhost:8000/blogs/' + id);
  
  return (
    <div className="blog-detail">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading... </div>}
      { blog && (<article>
        <h2>{ blog.title }</h2>
        <p>written by : { blog.author }</p>
        <div>{ blog.body }</div>
      </article>)}
    </div>
  );
}
 
export default BlogDetail;