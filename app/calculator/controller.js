import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'


export default class CalculatorController extends Controller {

  @tracked height = 1600;
  @tracked width = 1000;
  @tracked components = [];
  @tracked dimensions = [];

  //constants
  @tracked margin = 30;
  @tracked housing = 40;
  @tracked topMargin = 20;
  @tracked channel = 18;
  @tracked sashClearance = 1;
  @tracked splay = 8;
  @tracked numOfGlazingBars = 1;
  @tracked sashHorns = 90;
  @tracked glazingBarWidth = 22;
  @tracked stileWidth = 56;
  @tracked rebate = 15;
  @tracked glassClearance = 5;

  //dimensions
  get outerOpeningWidth() {
    return this.width - (2*this.margin);
  }

  //Stone sill to outer lining head
  get outerOpeningHeight() {
    return this.height - this.topMargin;
  }

  get sashOpeningWidth() {
    return this.outerOpeningWidth + (2 * this.channel);
  }

  get sashInnerOpeningHeight() {
    return this.outerOpeningHeight + this.channel - this.sill.height;
  }

  get boxWidth() {
    return this.outerOpeningWidth + (2 * this.outerLining.width);
  }

  get boxHeight() {
    return this.outerOpeningHeight + this.outerLiningHead.height;
  }

  get sashWidth() {
    return this.sashOpeningWidth - this.sashClearance;
  }

  get workingSashesHeight() {
    return this.sashInnerOpeningHeight + this.splay;
  }

  get overallSightLineWidth() {
    return this.sashWidth - (2 * this.stileWidth);
  }

  get overallSightLineHeight() {
    return this.workingSashesHeight - this.bottomRail.height - this.meetingRail.height - this.topRail.height;
  }

  get sashSightLineHeight() {
    return this.overallSightLineHeight / 2;
  }

  get individualSightLineWidth() {
    return (this.overallSightLineWidth - (this.numOfGlazingBars * this.glazingBarWidth)) / (this.numOfGlazingBars+1);
  }

  get topSashHeight() {
    return this.sashSightLineHeight + this.meetingRail.height + this.topRail.height;
  }

  get bottomSashHeight() {
    return this.sashSightLineHeight + this.meetingRail.height + this.bottomRail.height;
  }

  //Glass
  get glassOpeningHeight() {
    return this.sashSightLineHeight + (2 * this.rebate);
  }

  get glassOpeningWidth() {
    return this.overallSightLineWidth + (2 * this.rebate);
  }

  get glass() {
    let height = this.glassOpeningHeight - this.glassClearance;
    let width = this.glassOpeningWidth - this.glassClearance;
    return this.store.createRecord('component', {
      name: 'Glass',
      height,
      width,
      depth: 24,
      count: 1,
    });
  }

  //Window components
  get sill() {
    return this.store.createRecord('component', {
      name: 'Sill',
      height: 60,
      width: this.boxWidth,
      depth: 143,
      count: 1,
      lengthKey: 'width',
    });
  }

  get head() {
    return this.store.createRecord('component', {
      name: 'Head',
      height: 22,
      width: this.boxWidth,
      depth: 113,
      count: 1,
      lengthKey: 'width',
    });
  }

  get outerLiningHead() {
    return this.store.createRecord('component', {
      name: 'Outer Lining Head',
      height: 98,
      width: this.outerOpeningWidth,
      depth: 16,
      count: 1,
      lengthKey: 'width',
    });
  }

  get innerLiningHead() {
    return this.store.createRecord('component', {
      name: 'Inner Lining Head',
      height: 80,
      width: this.sashOpeningWidth,
      depth: 14,
      count: 1,
      lengthKey: 'width',
    });
  }

  get outerLining() {
    return this.store.createRecord('component', {
      name: 'Outer Lining',
      height: this.boxHeight,
      width: 101,
      depth: 16,
      count: 2,
      lengthKey: 'height',
    });
  }

  get innerLining() {
    return this.store.createRecord('component', {
      name: 'Inner Lining',
      height: this.boxHeight,
      width: 83,
      depth: 14,
      count: 2,
      lengthKey: 'height',
    });
  }

  get pulleyStiles() {
    return this.store.createRecord('component', {
      name: 'Pulley Stiles',
      height: this.sashInnerOpeningHeight + this.housing,
      width: 22,
      depth: 113,
      count: 2,
      lengthKey: 'height',
    });
  }

  get bottomRail() {
    return this.store.createRecord('component', {
      name: 'Bottom Rail',
      height: 92,
      width: this.sashWidth,
      depth: 47,
      count: 1,
      lengthKey: 'width',
    });
  }

  get topRail() {
    return this.store.createRecord('component', {
      name: 'Top Rail',
      height: 62,
      width: this.sashWidth,
      depth: 47,
      count: 1,
      lengthKey: 'width',
    });
  }

  get meetingRail() {
    return this.store.createRecord('component', {
      name: 'Meeting Rail',
      height: 39,
      width: this.sashWidth,
      depth: 56,
      count: 2,
      lengthKey: 'width',
    });
  }

  //Glazing Bars
  get glazingBarInner() {
    return this.store.createRecord('component', {
      name: 'Glazing Bar Inner',
      height: this.glassOpeningHeight,
      width: this.glazingBarWidth,
      depth: 11.5,
      count: 2,
      lengthKey: 'height',
    });
  }

  get glazingBarOuter() {
    return this.store.createRecord('component', {
      name: 'Glazing Bar Outer',
      height: this.glassOpeningHeight,
      width: this.glazingBarWidth,
      depth: 9,
      count: 2,
      lengthKey: 'height',
    });
  }

  //Stiles
  get topStile() {
    return this.store.createRecord('component', {
      name: 'Top Stile',
      height: this.topSashHeight + this.sashHorns,
      width: this.stileWidth,
      depth: 47,
      count: 2,
      lengthKey: 'height',
    });
  }

  get bottomStile() {
    return this.store.createRecord('component', {
      name: 'Bottom Stile',
      height: this.bottomSashHeight + this.sashHorns,
      width: this.stileWidth,
      depth: 47,
      count: 2,
      lengthKey: 'height',
    });
  }

  @action
  calculate() {
    let dimensions = [
      { name: 'Outer Opening Width', value: this.outerOpeningWidth },
      { name: 'Outer Opening Height', value: this.outerOpeningHeight },
      { name: 'Sash Opening Width', value: this.sashOpeningWidth },
      { name: 'Sash Inner Opening Height', value: this.sashInnerOpeningHeight },
      { name: 'Box Width', value: this.boxWidth },
      { name: 'Box Height', value: this.boxHeight },
      { name: 'Sash Width', value: this.sashWidth },
      { name: 'Working Sashes Height', value: this.workingSashesHeight },
      { name: 'Overall Sight Line Width', value: this.overallSightLineWidth },
      { name: 'Overall Sight Line Height', value: this.overallSightLineHeight },
      { name: 'Sash Sight Line Height', value: this.sashSightLineHeight },
      { name: 'Individual Sight Line Width', value: this.individualSightLineWidth },
      { name: 'Top Sash Height', value: this.topSashHeight },
      { name: 'Bottom Sash Height', value: this.bottomSashHeight },
      { name: 'Glass Opening Height', value: this.glassOpeningHeight },
      { name: 'Glass Opening Width', value: this.glassOpeningWidth },
    ];

    let components = [
      this.sill,
      this.head,
      this.outerLiningHead,
      this.innerLiningHead,
      this.outerLining,
      this.innerLining,
      this.pulleyStiles,
      this.glass,
      this.bottomRail,
      this.topRail,
      this.meetingRail,
      this.glazingBarInner,
      this.glazingBarOuter,
      this.topStile,
      this.bottomStile,
    ]
    this.components = components;
    this.dimensions = dimensions;
  }
}
