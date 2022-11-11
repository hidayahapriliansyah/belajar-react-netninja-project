import { Link } from 'react-router-dom';

const BlogLists = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // const { blogs, title } = props;

  return (
    <div className="blog-lists">
      <h2>{ title }</h2>
      { blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blog-detail/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by : { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogLists;