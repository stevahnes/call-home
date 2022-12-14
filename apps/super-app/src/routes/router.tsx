import { Route, Routes, Link } from 'react-router-dom';
import { Path } from './paths';
import { Scratch } from '.';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path={Path.Home}
        element={<Link to={Path.Scratch}>TODO</Link>}
      ></Route>
      <Route path={Path.Scratch} element={<Scratch />}></Route>
    </Routes>
  );
}