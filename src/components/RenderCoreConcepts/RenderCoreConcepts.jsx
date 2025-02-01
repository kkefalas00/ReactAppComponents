import {CORE_CONCEPTS} from '../../../data.js';
import CoreConcept from '../CoreConcept/CoreConcept.jsx';

export default function RenderCoreConcepts(){
    return (
      <ul>
        {CORE_CONCEPTS.map((concept)=>{
          return <CoreConcept  key = {concept.title} image = {concept.image} title = {concept.title} description = {concept.description}/>
        })}
      </ul>
    );
}