import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dice1Fill, Dice2Fill, Dice3Fill, Dice4Fill, Dice5Fill, Dice6Fill } from 'react-bootstrap-icons';
import Button from '@/components/Button.jsx';
import { getRandomItem } from '@/helpers/array.js';

const diceArray = [
  {
    icon: <Dice1Fill />,
    text: '1',
  },
  {
    icon: <Dice2Fill />,
    text: '2',
  },
  {
    icon: <Dice3Fill />,
    text: '3',
  },
  {
    icon: <Dice4Fill />,
    text: '4',
  },
  {
    icon: <Dice5Fill />,
    text: '5',
  },
  {
    icon: <Dice6Fill />,
    text: '6',
  },
];

export default function RollDice() {
  const [rollResult, setRollResult] = useState([]);
  const dice = useSelector((state) => state.dice);

  useEffect(() => {
    roll();
  }, []);

  const roll = () => {
    const rollResultTemp = [];
    for (let i = 0; i < dice.count; i++) {
      rollResultTemp.push(getRandomItem(diceArray));
    }
    setRollResult(rollResultTemp);
  };

  return (
    <>
      {rollResult.length > 0 ? (
        <div className="dice py-md">
          {rollResult.map((item, index) => (
            <div className="dice__icon" key={index}>
              {item.icon}
              <span className="visually-hidden">{item.text}</span>
            </div>
          ))}
        </div>
      ) : null}

      <Button fullWidth onClick={() => roll()}>
        Roll
      </Button>
    </>
  );
}
