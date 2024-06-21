import PropTypes from 'prop-types'

const ToggleButton = ({ showScoreTBP, toggleScoreTBP }) => {
  return (
    <button onClick={toggleText}>
      {showScoreTBP ? 'Show TBP' : 'Show Score'}
    </button>
  )
}

ToggleButton.propTypes = {
  showScoreTBP: PropTypes.bool.isRequired,
  toggleScoreTBP: PropTypes.func.isRequired,
}

export default ToggleButton