import propTypes from 'prop-types'

export const Input = ({ label, type, placeholder }) => (
    <label>
        <span>{label}</span>
        <input type={type} placeholder={placeholder} />
    </label>
)

Input.propTypes = {
    label: propTypes.string,
    type: propTypes.string,
    placeholder: propTypes.string,
}
