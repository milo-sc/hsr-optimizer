import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RelicPreview from './RelicPreview';

const RelicContainer = (props) => {
  const [showScoreTBP, toggleScoreTBP] = useState(true);

  const toggleText = () => {
    toggleScoreTBP(!showScoreTBP);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {showScoreTBP ? 'Show Alternative Text' : 'Show Score'}
      </button>
      <RelicPreview {...props} showScoreTBP={showScoreTBP} />
    </div>
  );
};

RelicContainer.propTypes = {
  relic: PropTypes.object.isRequired,
  score: PropTypes.object,
  characterId: PropTypes.string,
  source: PropTypes.string,
  setEditModalOpen: PropTypes.func,
  setSelectedRelic: PropTypes.func,
  setAddModelOpen: PropTypes.func,
};

export default RelicContainer;