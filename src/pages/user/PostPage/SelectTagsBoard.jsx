import React, { useEffect, useState } from "react";
import { categoryService } from "../../../apis";

export const SelectTagsBoard = (props) => {
  // const { setPostProps, post } = props;
  // const [tags, setTags] = useState([]);
  // const [isShowResults, setShowResults] = useState(false);
  // const ADD_TAG = "ADD_TAG";
  // const REMOVE_TAG = "REMOVE_TAG";

  // let inputTimeout;
  // const doSearchTags = (event) => {
  //   const { value } = event.target;
  //   if (inputTimeout !== undefined) clearTimeout(inputTimeout);
  //   if (value) {
  //     inputTimeout = setTimeout(() => {
  //       const filters = {
  //         id: `not:${post.tags.map((e) => e.id).toString()}`,
  //         name: `like:%${value}%`,
  //         limit: 3,
  //       };
  //       categoryService.getCategoryTags(post.category.id, filters).then((response) => {
  //         if (response.status === 200) {
  //           setTags(response.data.data);
  //           setShowResults(true);
  //         }
  //       });
  //     }, 300);
  //   } else setTags([]);
  // };

  // const onHandleSelectTag = (flag, tag) => {
  //   if (flag === ADD_TAG) post.tags.push(tag);
  //   else {
  //     const index = post.tags.indexOf(tag);
  //     if (index !== -1) {
  //       post.tags.splice(index, 1);
  //     }
  //   }
  //   setPostProps({ ...post, tags: post.tags });
  //   setShowResults(false);
  // };
  //
  // const showSearchResults = (tags) => {
  //   const items = tags.map((tag) => {
  //     const { id, name } = tag;
  //     return (
  //       <li
  //         key={id}
  //         onClick={() => {
  //           onHandleSelectTag(ADD_TAG, tag);
  //         }}
  //       >
  //         {name}
  //       </li>
  //     );
  //   });
  //   return (
  //     <div className="custom-dropdown">
  //       <ul>{items}</ul>
  //     </div>
  //   );
  // };

  // const showSelectedTags = (tags) => {
  //   const items = tags.map((tag) => {
  //     const { id, name } = tag;
  //     return (
  //       <span
  //         key={id}
  //         className="badge custom-badge badge-pill badge-success p-2 px-3"
  //         onClick={() => {
  //           onHandleSelectTag(REMOVE_TAG, tag);
  //         }}
  //       >
  //         {name}
  //       </span>
  //     );
  //   });
  //   return items;
  // };
  // useEffect(() => {
  //   setPostProps({...post, tags: []})
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [post.category.id]);
  return (
    <div className="info-wrap bg-primary w-100 p-md-5 p-4" style={{backgroundSize: "contain",
      backgroundImage: "url('https://creativedrop.com/wp-content/uploads/2015/06/creativity-tech.jpg')"}}>
      {/*<h3 style={{ fontWeight: "bold", color: "white" }}>Select post's tags</h3>*/}
      {/*<div className="mb-4">*/}
      {/*  <div className="form-group dropdown-wrapper">*/}
      {/*    <label className="label" htmlFor="tag">*/}
      {/*      Search*/}
      {/*    </label>*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      className="form-control"*/}
      {/*      onChange={(event) => doSearchTags(event)}*/}
      {/*      placeholder="Type here..."*/}
      {/*    />*/}
      {/*    {tags.length > 0 && isShowResults ? showSearchResults(tags) : null}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="row">*/}
      {/*  <div className="col-md-12"></div>*/}
      {/*  <div className="col-lg-12">*/}
      {/*    <h2 className="heading-section mb-4">Selected tags</h2>*/}
      {/*    {showSelectedTags(post.tags)}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
