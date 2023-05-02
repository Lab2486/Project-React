function ItemContainer(props) {
  const ItemContainerBg = { background: props.bgColor };
  return (
    <>
      <div className="ItemContainer" style={ItemContainerBg}>
        <h1>{props.greeting}</h1>
      </div>
    </>
  );
}

export default ItemContainer;
