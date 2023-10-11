import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@/components/FormControl.jsx';
import Button from '@/components/Button.jsx';
import Modal from '@/components/Modal.jsx';
import { setPointsMax } from '@/state/slice/trackerSlice.js';

export default function SettingsPage() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const tracker = useSelector((state) => state.tracker);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    dispatch(setPointsMax(Number(values['tracker-points-max'])));
    setSuccessModalOpen(true);
  };

  return (
    <>
      <div className="plate">
        <h1 className="m-0">Settings</h1>

        <form className="pt-md" onSubmit={(e) => handleSubmit(e)}>
          <FormControl
            type="number"
            name="tracker-points-max"
            id="tracker-points-max"
            min={tracker.points.min + 1}
            max={9999}
            defaultValue={tracker.points.max}
            required
          >
            Max points:
          </FormControl>

          <div className="pt-md">
            <Button type="submit" fullWidth>
              Save
            </Button>
          </div>
        </form>
      </div>

      <Modal isOpen={successModalOpen} onClose={() => setSuccessModalOpen(false)}>
        <div className="fs-lg text-center">Settings changed successfully</div>
      </Modal>
    </>
  );
}
