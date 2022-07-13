import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../../../actions";
import { Pagination } from "../../../../common";
import { Comment } from "./Comment";

export const CommentList = (props) => {
  const {id} = props;
  const comments = useSelector((state) => state.page.comments);
  const dispatch = useDispatch();
  if (comments&&comments.data.length>0) {
    const { data, pagination } = comments;
    const onChangePage = (page) => {
      dispatch(PostActions.getPostComments(id, {limit: pagination.limit, page}))
    }
    return(
      <div>
        {console.log("render")}
        {data.map((comment) => (
          <Comment key={comment.id} comment={comment} classType="mb-4" />
        ))}
        <hr />
        <Pagination page={pagination.page} total={pagination.total} onChangePage={onChangePage}/>
      </div>
    )
  } else {
    return <div className="text-center">No comments found</div>;
  }
};
