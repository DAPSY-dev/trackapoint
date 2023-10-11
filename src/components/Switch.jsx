import { Toggle2Off, Toggle2On } from 'react-bootstrap-icons';

export default function Switch({ id, className, checked, children, ...props }) {
  let classes = 'check-radio';
  classes += className ? ` ${className}` : '';

  return (
    <div className={classes}>
      <input type="checkbox" id={id} className="visually-hidden" checked={checked} {...props} />
      <label htmlFor={id} className="check-radio__label">
        {checked ? <Toggle2On size={24} /> : <Toggle2Off size={24} />}
        {children}
      </label>
    </div>
  );
}
