import { useParams, Link } from "react-router-dom";
import PostList from "../../components/posts/PostList";
import "./category.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchPostsCategory } from "../../redux/apiCalls/postApiCall";

const Category = () => {
  const dispatch = useDispatch();
  const { postsCate } = useSelector((state) => state.post);

  const { category } = useParams();
  useEffect(() => {
    dispatch(featchPostsCategory(category));
    window.scrollTo(0, 0);
  }, [category, dispatch]);

  return (
    <section className="category">
      {postsCate.length === 0 ? (
        <>
          <h1 className="category-not-found">
            Posts with <span>{category}</span> cagtegory not found
          </h1>
          <Link to={"/posts"} className="category-not-found-link">
            go to posts page
          </Link>
        </>
      ) : (
        <>
          <h1 className="category-title">Posts based on {category}</h1>
          <PostList posts={postsCate} />
        </>
      )}
    </section>
  );
};

export default Category;
