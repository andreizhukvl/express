import React from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources';
const API_URL = 'https://newsapi.org/v1/sources?apiKey=d1450e81d3cb4c4ba3f2f5c772206b14';

fetch(API_URL).then(result => {
      if (result.ok)
      {
        return result.json();
      }
    }).then(data => {
        ReactDOM.render(
            <Sources items={data.sources}/>,
            document.getElementById('feed')
        );
    }).catch(() => {});