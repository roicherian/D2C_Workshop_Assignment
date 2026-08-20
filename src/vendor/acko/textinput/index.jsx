import './textinput.css'

export function TextInput({ id, type = 'text', className = '', ...props }) {
  return (
    <input
      id={id}
      type={type}
      className={['acko-text-input', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}
