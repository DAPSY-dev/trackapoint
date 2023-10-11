import { useSelector, useDispatch } from 'react-redux';
import { TrophyFill } from 'react-bootstrap-icons';
import Button from '@/components/Button.jsx';
import Modal from '@/components/Modal.jsx';
import Tracker from '@/components/Tracker.jsx';
import { resetPlayers } from '@/state/slice/trackerSlice.js';

export default function Players({ playersCount }) {
  const winnerId = useSelector((state) => state.tracker.players.winnerId);
  const dispatch = useDispatch();

  const generateTracker = () => {
    const components = [];
    for (let i = 0; i < playersCount; i++) {
      components.push(
        <div className="plate" key={i}>
          <Tracker id={i} />
        </div>
      );
    }
    return components;
  };

  return (
    <>
      <div className={`tracker-grid tracker-grid--${playersCount}`}>{generateTracker()}</div>

      <div className="pt-sm">
        <Button fullWidth onClick={() => dispatch(resetPlayers())}>
          Reset
        </Button>
      </div>

      <Modal isOpen={winnerId !== null} onClose={() => dispatch(resetPlayers())}>
        {winnerId !== null ? (
          <div className="tracker-winner">
            <TrophyFill />
            <span className="visually-hidden">Winner:</span>
            <strong>Player {winnerId + 1}</strong>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
