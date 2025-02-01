import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import RenderCoreConcepts from './components/RenderCoreConcepts/RenderCoreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from '../data.js';

function App() {
  //We must call the state on top level of the component function
  const[selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton){
    //SelectedButton => 'components', 'JSX', 'Props', 'State' 
    setSelectedTopic(selectedButton);

}

<div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button>Proceed</button>
        </div>

  return (
    <div>
      <Header/>
      <main>
        <section id ="core-concepts">
            <h2>Core Concepts</h2>
    	      <RenderCoreConcepts />
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            {/* we pointer the value of the function as props */}
            {/* This is a pattern for passing arguments to a control event. We simply use arrow function to define the function for the event and passing into the arguments  */}
            <TabButton isSelected={selectedTopic==="components"} onSelect={()=>handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"}  onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"}  onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>
          {
            !selectedTopic ? (<p>Please select a topic</p>) : (
                  <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                        {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
              )
          }
        </section>
      </main>
    </div>
  );
}

export default App;
