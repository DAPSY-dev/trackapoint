import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PersonFill, Dash, Plus } from 'react-bootstrap-icons';
import Button from '@/components/Button.jsx';
import Switch from '@/components/Switch.jsx';
import { increment, decrement, incrementByAmount, toggleSpecial } from '@/state/slice/trackerSlice.js';

export default function Tracker({ id }) {
  const randomId = useId();
  const playerData = useSelector((state) => state.tracker.players.data[id]);
  const points = useSelector((state) => state.tracker.points);
  const dispatch = useDispatch();

  return (
    <div className="tracker">
      <div className="tracker__player">
        <PersonFill className="tracker__player-icon" />
        <span>Player {id + 1}</span>
      </div>

      <div className="tracker__points">
        {playerData.points}
        <span className="visually-hidden">points</span>
      </div>

      <div className="button-group pt-xs">
        <Button variant="icon" onClick={() => dispatch(decrement({ id: id }))}>
          <Dash />
          <span className="visually-hidden">-1</span>
        </Button>
        <Button variant="icon" onClick={() => dispatch(increment({ id: id }))}>
          <Plus />
          <span className="visually-hidden">+1</span>
        </Button>
      </div>
      <div className="button-group">
        {points.incrementByAmount.map((amount) => (
          <Button variant="sm" onClick={() => dispatch(incrementByAmount({ id: id, amount: amount }))} key={amount}>
            +{amount}
          </Button>
        ))}
      </div>

      <Switch
        id={randomId}
        className="pt-xs"
        checked={playerData.special}
        onChange={() => dispatch(toggleSpecial({ id: id }))}
      >
        Special
      </Switch>
    </div>
  );
}
