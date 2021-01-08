import Component from '@glimmer/component';

export default class CuttingListComponent extends Component {

  get woodComponents() {
    return this.args.components
      .filter(component => !component.name.toLowerCase().includes("glass"));
  }

  get totalCubicFeet() {
    return this.sumValue("cubicFeet");
  }

  get totalCubicMeters() {
    return this.sumValue("cubicMeters");
  }

  sumValue(key) {
    return this.woodComponents
      .map(component => Number(component[key]))
      .reduce((total, currentValue) => total + currentValue)
      .toFixed(3);
  }
}
