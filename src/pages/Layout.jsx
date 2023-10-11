import { Outlet, Link } from 'react-router-dom';
import useVH from 'react-vh';

export default function Layout() {
  useVH();

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="wrapper">
          <Link to="/" className="logo">
            trackapoint
          </Link>
        </div>
      </header>

      <main className="app-main">
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
