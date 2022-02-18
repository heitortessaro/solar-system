import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <section data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName={ planets[0].name } planetImage={ planets[0].image } />
      </section>
    );
  }
}

export default SolarSystem;
