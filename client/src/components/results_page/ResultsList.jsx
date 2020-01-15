import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ResultThumbnail from './ResultThumbnail.jsx';
import './Results.css';

const ResultsList = ({ listings }) => (
  <div id="results-list-container">
    <CardColumns>
      {listings.map((listing, index) => <ResultThumbnail listing={listing} key={`${listing.dateSubmitted}-${index}`} />)}
    </CardColumns>
  </div>
);

export default ResultsList;
