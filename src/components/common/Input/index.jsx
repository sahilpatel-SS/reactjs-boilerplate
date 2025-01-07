import PropTypes from 'prop-types';
import './styles.css';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  error,
  label,
  name,
  ...props
}) => {
  const baseClass = 'input';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    fullWidth ? `${baseClass}--full-width` : '',
    error ? `${baseClass}--error` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`${baseClass}-wrapper`}>
      {label && (
        <label htmlFor={name} className={`${baseClass}__label`}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={classes}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {error && <span className={`${baseClass}__error`}>{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Input;
