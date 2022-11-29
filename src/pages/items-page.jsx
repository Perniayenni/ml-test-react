import React from 'react'
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectData } from '../redux/selectors/items';
import { useNavigate } from 'react-router';
import { CircularIndeterminate } from '../components/CircularIndeterminate';

export const ItemsPage = () => {
  const { items = [], loading } = useSelector(selectData)
  const navigate = useNavigate()
  
  function goToItem(id) {
    navigate(`/items/${id}`);
  }

  if (loading) return (<CircularIndeterminate />)
  
  if (items.length === 0 && !loading) return (<>No se encontraron resultados</>)

  return ( 
    <div className='items'>
      <Paper elevation={1}>
         {items.map((item) => (
            <div key={item.id} className='items__item'>
              <div
                className='items__content-picture pointer'
                onClick={() => goToItem(item.id)}
              >
                <img
                  className='items__picture'
                  alt='imagen'
                  src={item.picture}
                />
              </div>

              <div className='items__content-description'>
                <label className='items__price'>
                  <span className='items_symbol'>$</span>
                  {item.price.amount}
                </label>
                <p
                  className='items__title pointer'
                  onClick={() => goToItem(item.id)}
                >
                  {item.title}
                </p>
                <label
                  className='items__condition pointer'
                  onClick={() => goToItem(item.id)}
                >
                  {item.condition === 'new' ? 'Nuevo' : 'Usado'}
                </label>
              </div>
              <div className='items__content-address'>
                <label>{item.state_name}</label>
              </div>
            </div>
          ))}
      </Paper>
    </div>  
  )
}
