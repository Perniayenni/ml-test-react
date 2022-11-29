import React from 'react';
import { Breadcrumbs, Link} from  '@mui/material';
import { useSelector } from 'react-redux';
import { selectData } from '../redux/selectors/items';

export const Breadcrumb = () => {
  const { categories= [] } = useSelector(selectData)

  if (categories.length === 0) return

  return (
    <div className='breadcrumb'>
      <Breadcrumbs maxItems={6} aria-label='breadcrumb'>
        {categories.map((category) => (
          <Link key={category} color='inherit' href={`/items?search=${category}`}>
            {category}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
