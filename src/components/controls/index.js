import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import { getInfoCart } from '../../utils';
import './style.css';

function Controls({onOpenModal, totalPrice, countItems}){
  const cn = bem('Controls');

  const cartInfo = useMemo(() => getInfoCart(countItems, totalPrice), [countItems, totalPrice]);
  
  return (
    <div className={cn()}>
      <p className={cn('cart')}>
        В корзине:<span className={cn('cart-info', {empty: !countItems})}>{`${countItems ? cartInfo : 'пусто'}`}</span>
      </p>
      <button onClick={onOpenModal}>Перейти</button>
    </div>
  )
};

Controls.propTypes = {
  onOpenModal: propTypes.func.isRequired,
  totalPrice: propTypes.number.isRequired,
  countItems: propTypes.number.isRequired
};

Controls.defaultProps = {
  onOpenModal: () => {},
  totalPrice: 0,
  countItems: 0
};

export default React.memo(Controls);
