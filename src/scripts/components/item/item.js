import React from 'react';

import style from './item.scss';

export default function Item(props) {
  return (
    <div className="item" style={style}>
      <span className="item-text">{props.item.commonName}</span>
      <span className="item-meta">{props.item.scientificName}</span>
    </div>
  );
}

Item.propTypes = {
  item: React.PropTypes.object,
};
