import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonPost = () => {
  return (
    <div className="skeleton-weapper">
      <div className="skeleton-post">
        <SkeletonElement type="img" />
        <SkeletonElement type="title" />
        <SkeletonElement type="button" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonPost;
