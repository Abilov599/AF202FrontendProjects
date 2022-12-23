import React from "react";

function ListItem({article}) {
  return (
    <div>
      <p key={article.id}>{article.name}</p>
    </div>
  );
}

export default ListItem;
