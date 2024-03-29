import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy {props.cake ? 'Cake' : 'Ice Cream'}</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

  return {
    item: itemState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunc = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunc
  };
};

// export default connect(null, mapDispatchToProps)(ItemContainer); // In some scenarios, if just the mapDispatchToProps only needed, use null in place of mapStateToProps in connect HOC

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
