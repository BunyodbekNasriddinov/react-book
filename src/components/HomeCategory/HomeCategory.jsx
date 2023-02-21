import { Outlet } from 'react-router-dom';
import { Category } from '../Category';

export const HomeCategory = () => {
  return (
    <>
      <Category />
      <Outlet />
    </>
  )
}
