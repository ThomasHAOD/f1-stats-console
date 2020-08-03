import React from 'react';
import Layout from './layouts'
import Console from './pages/Console/Console'

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Console />
      </Layout>
    </div>
  );
}

export default App;
