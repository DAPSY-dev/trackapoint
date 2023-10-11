import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Players from '@/components/Players.jsx';

export default function TrackerPage() {
  let { playersCount } = useParams();
  const navigate = useNavigate();
  const tracker = useSelector((state) => state.tracker);
  const playersNumber = Number(playersCount);

  useEffect(() => {
    if (!validPlayersCount(playersNumber)) {
      navigate('/not-found');
    }
  }, []);

  const validPlayersCount = (count) => {
    return Number.isInteger(count) && count >= tracker.players.min && count <= tracker.players.max;
  };

  if (!validPlayersCount(playersNumber)) {
    return null;
  }

  return (
    <Players playersCount={playersNumber} />
  );
}
