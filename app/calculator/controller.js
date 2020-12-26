import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'


export default class CalculatorController extends Controller {

  @tracked height = 0;
  @tracked width = 0;
  @tracked components = [];

  //constants
  @tracked margin = 33;
  @tracked housing = 40;
  @tracked topMargin = 20;
  @tracked channel = 18;

  //dimensions
  get outerOpeningWidth() {
    return this.width - (2*this.margin);
  }

  //Stone sill to outer lining head
  get outerOpeningHeight() {
    return this.height - this.topMargin;
  }

  get sashOpeningWidth() {
    return this.outerOpeningWidth + this.channel;
  }

  get sashInnerOpeningHeight() {
    return this.outerOpeningHeight + this.channel - this.sill.height;
  }

  get boxWidth() {
    return this.outerOpeningWidth + (2* this.outerLining.width);
  }

  get boxHeight() {
    return this.outerOpeningHeight + this.outerLiningHead.height;
  }


  //Window components
  get sill() {
    return {
      name: 'Sill',
      height: 60,
      width: this.boxWidth,
      depth: 143,
      count: 1,
    }
  }

  get head() {
    return {
      name: 'Head',
      height: 22,
      width: this.boxWidth,
      depth: 113,
      count: 1,
    }
  }

  get outerLiningHead() {
    return {
      name: 'Outer Lining Head',
      height: 98,
      width: this.outerOpeningWidth,
      depth: 16,
      count: 1,
    }
  }

  get innerLiningHead() {
    return {
      name: 'Inner Lining Head',
      height: 80,
      width: this.sashOpeningWidth,
      depth: 14,
      count: 1,
    }
  }

  get outerLining() {
    return {
      name: 'Outer Lining',
      height: this.boxHeight,
      width: 101,
      depth: 16,
      count: 2,
    }
  }

  get innerLining() {
    return {
      name: 'Inner Lining',
      height: this.boxHeight,
      width: 83,
      depth: 14,
      count: 2,
    }
  }

  get pulleyStiles() {
    return {
      name: 'Pulley Stiles',
      height: this.sashInnerOpeningHeight + this.housing,
      width: 22,
      depth: 113,
      count: 2,
    }
  }

  @action
  calculate() {
    let components = [
      this.sill,
      this.head,
      this.outerLiningHead,
      this.innerLiningHead,
      this.outerLining,
      this.innerLining,
      this.pulleyStiles,
    ]
    this.components = components;
  }
}
