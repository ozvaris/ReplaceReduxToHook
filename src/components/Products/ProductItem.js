import React, {useContext} from 'react';
//import { useDispatch } from 'react-redux';
//import {ProductsContext} from '../../context/products-context';
import { useStore } from '../../hooks-store/store';

import Card from '../UI/Card';
import './ProductItem.css';
//import { toggleFav } from '../../store/actions/products';

const ProductItem = React.memo(props => {
  // const dispatch = useDispatch();

  // const toggleFavHandler = () => {
  //   dispatch(toggleFav(props.id));
  // };

  // const toogleFav = useContext(ProductsContext).toogleFav;

  // const toggleFavHandler = () => {
  //   toogleFav(props.id);
  // };

  console.log('RENDERING');
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
