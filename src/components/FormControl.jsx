export default function FormControl({ type = 'text', id, className, children, ...props }) {
  return (
    <div className={className}>
      {children ? (
        <label htmlFor={id} className="form-label">
          {children}
        </label>
      ) : null}
      <input type={type} id={id} className="form-control" {...props} />
    </div>
  );
}
