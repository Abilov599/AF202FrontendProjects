import ListItem from "../list-item";

function List({ articles }) {
  return articles.map((article) => {
    return <ListItem key={article.id} article={article} />;
  });
}

export default List;
