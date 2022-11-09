const BlogLists = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // const { blogs, title } = props;

  return (
    <div className="blog-lists">
      <h2>{ title }</h2>
      { blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by : { blog.author }</p>
            <p>{ blog.body }</p>
          </div>   
      ))}
    </div>
  )
}

export default BlogLists;