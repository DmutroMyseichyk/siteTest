import React from 'react';
import './App.css';
import Header from  './components/Header.js'

const App = () => {
  return (
    <div id="wraper">
      <Header/>
      <article id="mainArticle">Article</article>
      <nav id="mainNav">Nav</nav>
      <footer id="pageFooter">Footer</footer>
    </div>
  );
}

export default App;
