import React from 'react';
import Item from './item';
// import style from './item.scss';

export default function ItemList(props) {
  if (props.loading) {
    return <span>Loading</span>;
  }
  let itemList = null;

  itemList = props.items.map((item, index) => (
    <Item key={index} item={item} />
  ));

  return (
    <div className="item-list">
      {itemList}
    </div>
  );
}

ItemList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  loading: React.PropTypes.bool,
};
