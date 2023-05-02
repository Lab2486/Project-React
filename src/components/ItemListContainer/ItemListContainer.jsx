function ItemListContainer(props) {
  const ItemListContainerBg = { background: props.bgColor };
  return (
    <>
      <div className="ItemListContainer" style={ItemListContainerBg}>
        <h1>{props.greeting}</h1>
      </div>
    </>
  );
}

export default ItemListContainer;
