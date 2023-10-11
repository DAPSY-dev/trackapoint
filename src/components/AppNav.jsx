import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dice3Fill, PersonFill, PeopleFill, GearFill } from 'react-bootstrap-icons';

export default function AppNav() {
  const players = useSelector((state) => state.tracker.players);

  const generateTrackerLinks = () => {
    const components = [];
    for (let i = 0; i < players.max; i++) {
      components.push(
        <li className="app-nav__item" key={i}>
          <Link to={`/tracker/${i + 1}`} className="app-nav__link">
            {i === 0 ? (
              <>
                <PersonFill />
                <span>{i + 1} player</span>
              </>
            ) : (
              <>
                <PeopleFill />
                <span>{i + 1} players</span>
              </>
            )}
          </Link>
        </li>
      );
    }
    return components;
  };

  return (
    <div className="plate plate--md py-0">
      <nav className="app-nav">
        <ul className="app-nav__items">
          <li className="app-nav__item">
            <Link to="/dice" className="app-nav__link">
              <Dice3Fill />
              <span>Dice</span>
            </Link>
          </li>
          {generateTrackerLinks()}
          <li className="app-nav__item">
            <Link to="/settings" className="app-nav__link">
              <GearFill />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
