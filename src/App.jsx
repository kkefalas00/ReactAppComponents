import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';

function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
