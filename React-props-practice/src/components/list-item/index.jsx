import React from "react";

function ListItem({article}) {
  return (
    <div>
      <p>{article.name}</p>
    </div>
  );
}

export default ListItem;
