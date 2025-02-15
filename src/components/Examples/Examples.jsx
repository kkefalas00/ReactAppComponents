import { useState } from 'react';
import { EXAMPLES } from "../../../data";
import TabButton from "../TabButton/TabButton";
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';


export default function Examples(){

      //We must call the state on top level of the component function
  const[selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton){
    //SelectedButton => 'components', 'JSX', 'Props', 'State' 
    setSelectedTopic(selectedButton);

}
    return (
        <>
            <Section title= "Examples" id = "examples">
            <Tabs 
                buttons = {
                <>
                {/* we pointer the value of the function as props */}
                {/* This is a pattern for passing arguments to a control event. We simply use arrow function to define the function for the event and passing into the arguments  */}
                <TabButton isSelected={selectedTopic==="components"} onSelect={()=>handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==="props"}  onSelect={()=>handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic==="state"}  onSelect={()=>handleSelect("state")}>State</TabButton>
                </>
            }>
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
            </Tabs>
            </Section>
        </>
    );


}