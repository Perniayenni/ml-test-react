import React, { useEffect } from 'react'
import { Button, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { CircularIndeterminate } from '../components/CircularIndeterminate';
import { getItem } from '../redux/actions/items';
import { selectData } from '../redux/selectors/items';

export const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, loading } = useSelector(selectData)
 
  useEffect(() => { dispatch(getItem(id)) }, [])

  if (loading) return (<CircularIndeterminate />)
    
  return (
    <div className='item'>
      <Paper>
        <div className='item__content'>
          <div className='item__picture'>
            <img className='item__img' src={item?.picture} />
            <div className='item__description'>
              <label>Descripción del producto</label>
              <p>{item?.description}</p>{' '}
            </div>
          </div>
          <div className='item__content-title'>
            <label className='item__condition '>
              {item?.condition === 'new' ? 'Nuevo' : 'Usado'}
            </label>
            <p className='item__title'>{item?.title}</p>
            <label className='item__price'>
              <span className='item_symbol'>$</span>
              {item?.price?.amount}
            </label>

            <Button className='item__button-buy'>Comprar</Button>
          </div>
        </div>
      </Paper>
  </div>
  )
}
