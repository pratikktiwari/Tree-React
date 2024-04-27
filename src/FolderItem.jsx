import React from "react";
import "./Folder.css";
import FolderImage from "./assets/FolderItem.png";
import FileItem from "./assets/FileItem.png";

const FolderItem = (props) => {
  const { child, name, nest, node, path } = props;
  const handleClick = () => {
    const children = document.querySelectorAll(`[data^='${path}']`);
    const expanded = children[0].getAttribute("pstatus") === "expanded";

    children[0].setAttribute("pstatus", expanded ? "collapsed" : "expanded");

    console.log(expanded);
    children.forEach((child, index) => {
      if (index !== 0) {
        console.log(child.getAttribute("status"));
        if (expanded) {
          child.setAttribute("status", "collapsed");
        } else {
          child.setAttribute("status", "expanded");
        }
      }
    });
  };
  return (
    <div
      className="folder-item"
      style={{ marginLeft: nest * 5 }}
      data={path}
      onClick={handleClick}
      pstatus="expanded"
      status="expanded"
    >
      {node.type === "d" && (
        <img src={FolderImage} className="folder-item-img" />
      )}
      {node.type === "f" && <img src={FileItem} className="folder-item-img" />}
      <span className="folder-name">{name}</span>
    </div>
  );
};

export default FolderItem;
