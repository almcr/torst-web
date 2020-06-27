import React from 'react';

import TorrentFeed from './components/TorrentFeed';
import FeedMenu from './components/FeedMenu'


function App() {
  return (
    <div style={{ padding: '2% 30%' }}>
      <FeedMenu />
      <TorrentFeed percent={30}/>
      <TorrentFeed percent={50}/>
    </div>
  );
}

export default App;
