import CoreConcept from './CoreConcept.jsx'; // Importing CoreConcept component
import { CORE_CONCEPTS } from '../data.js'; // Importing CORE_CONCEPTS data

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
    );
}