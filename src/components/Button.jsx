export default function Button({ type = 'button', variant, className, fullWidth, children, ...props }) {
  let classes = 'button';
  classes += variant ? ` button--${variant}` : '';
  classes += className ? ` ${className}` : '';
  classes += fullWidth ? ' full-width' : '';

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
