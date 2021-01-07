import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoorController extends Controller {

  @tracked width = 861;
  @tracked height = 2512;
  @tracked clearance = 12;
  @tracked cillRebate = 18;
  @tracked doorRebate = 9;
  @tracked doorClearance = 7;
  @tracked doorHeight = 1982;
  @tracked fanlightRebate = 15;
  @tracked numOfMullions = 1;
  @tracked glassClearance = 5;
  @tracked panelClearance = 3;
  @tracked dimensions;
  @tracked components;


  //dimentions
  get frameHeight() {
    return this.height - this.clearance;
  }

  get frameWidth() {
    return this.width - this.clearance;
  }

  get doorOpeningHeight() {
    return this.doorHeight - this.doorRebate + this.doorClearance;
  }

  get doorOpeningWidth() {
    //Fanlight rebate should be the same as the doorframerebate
    //Ask whether doorFrame and fanlight rebate can be the same.
    //Removing the rebate the jambs as they are a stop for the door.
    return this.frameWidth - ((this.jamb.width - this.fanlightRebate) * 2);
  }

  get doorWidth() {
    //Confirm -3 probably door clearance
    return this.doorOpeningWidth - 3;
  }

  get fanlightSightLineWidth() {
    let numOfSections = this.numOfMullions + 1;
    return (this.frameWidth - (this.jamb.width * 2) - (this.numOfMullions * this.mullion.width)) / numOfSections;
  }

  get fanlightSightLineHeight() {
    //get transom height without rebate sas it is not included in the mullion height.
    let transomHeightWithoutDoorRebate = this.transom.height - this.fanlightRebate;
    return this.mullion.height - this.head.height - transomHeightWithoutDoorRebate;
  }

  get fanlightOpeningWidth() {
    return this.fanlightSightLineWidth + (2 * this.fanlightRebate);
  }

  get fanlightOpeningHeight() {
    return this.fanlightSightLineHeight + (2 * this.fanlightRebate);
  }

  get doorPanelSightLineWidth() {
    return this.doorWidth - (2* this.stile.width);
  }

  get doorPanelOpeningWidth() {
    //15mm Rebate seems consistent so fan light rebate was used consider changing name
    //or having seperate rebates for each section if needed.
    return this.doorPanelSightLineWidth + (this.fanlightRebate * 2) ;
  }

  get glassPanelSightLineHeight() {
    return this.doorHeight - this.bottomRail.height - this.doorPanelSightLineWidth - this.midRail.height - this.topRail.height;
  }

  get glassPanelOpeningHeight() {
    return this.glassPanelSightLineHeight + (this.fanlightRebate * 2)
  }

  //component
  //Frame
  get transom() {
    return this.store.createRecord('component', {
      name: 'Transom',
      lengthKey: 'width',
      height: 72,
      width: this.frameWidth,
      depth: 95,
      count: 1,
    })
  }

  get cill() {
    //Give name to 25
    let cillWidth = this.frameWidth + (2 * 25);
    return this.store.createRecord('component', {
      name: 'Cill',
      lengthKey: 'width',
      height: 68,
      width: cillWidth,
      depth: 165,
      count: 1,
    });
  }

  get head() {
    return this.store.createRecord('component', {
      name: 'Head',
      lengthKey: 'width',
      height: 57,
      width: this.frameWidth,
      depth: 95,
      count: 1,
    })
  }

  get jamb() {
    return this.store.createRecord('component', {
      name: 'Jamb',
      lengthKey: 'height',
      height: this.frameHeight,
      width: 57,
      depth: 95,
      count: 2,
    })
  }

  get mullion() {
    let mullionHeight = this.frameHeight - (this.cill.height - this.cillRebate) - this.doorOpeningHeight;
    return this.store.createRecord('component', {
      name: 'Mullion',
      lengthKey: 'height',
      height: mullionHeight,
      width: 72,
      depth: 95,
      count: 2,
    })
  }

  get horizontalBeads() {
    return this.store.createRecord('component', {
      name: 'Horizontal Beads',
      lengthKey: 'width',
      height: 14.5,
      width: this.fanlightOpeningWidth,
      depth: 17.5,
      count: 4,
    })
  }

  get verticalBeads() {
    return this.store.createRecord('component', {
      name: 'Vertical Beads',
      lengthKey: 'height',
      height: this.fanlightOpeningHeight,
      width: 14.5,
      depth: 17.5,
      count: 4,
    })
  }

  //Door
  get stile() {
    return this.store.createRecord('component', {
      name: 'Stiles',
      lengthKey: 'height',
      height: this.doorHeight,
      width: 110,
      depth: 45,
      count: 2,
    })
  }
  get topRail() {
    return this.store.createRecord('component', {
      name: 'Top Rail',
      lengthKey: 'width',
      height: 110,
      width: this.doorWidth,
      depth: 45,
      count: 1,
    })
  }
  get midRail() {
    return this.store.createRecord('component', {
      name: 'Middle Rail',
      lengthKey: 'width',
      height: 200,
      width: this.doorWidth,
      depth: 45,
      count: 1,
    })
  }
  get bottomRail() {
    return this.store.createRecord('component', {
      name: 'Bottom Rail',
      lengthKey: 'width',
      height: 200,
      width: this.doorWidth,
      depth: 45,
      count: 1,
    })
  }

  get lowerPanel() {
    //Lower panel is usually square, so openingwidth is also the height
    return this.store.createRecord('component', {
      name: 'Lower Panel',
      // lengthKey: 'width',
      height: this.doorPanelOpeningWidth - this.panelClearance,
      width: this.doorPanelOpeningWidth - this.panelClearance,
      depth: 22,
      count: 1,
    })
  }

  get glassPanel() {
    return this.store.createRecord('component', {
      name: 'Door Glass Panel',
      // lengthKey: 'width',
      height: this.glassPanelOpeningHeight - this.glassClearance,
      width: this.doorPanelOpeningWidth - this.glassClearance,
      depth: 22,
      count: 1,
    })
  }

  get verticalGlazingBeads() {
    return this.store.createRecord('component', {
      name: 'Vertical Glazing Beads',
      lengthKey: 'height',
      height: this.glassPanelOpeningHeight,
      width: 14.5,
      depth: 22,
      count: 2,
    })
  }

  get horizontalGlazingBeads() {
    return this.store.createRecord('component', {
      name: 'Vertical Glazing Beads',
      lengthKey: 'width',
      height: 14.5,
      width: this.doorPanelOpeningWidth,
      depth: 22,
      count: 2,
    })
  }

  @action
  calculate() {
    let dimensions = [
      { name: 'Frame Height', value: this.frameHeight },
      { name: 'Frame Width', value: this.frameWidth },
      { name: 'Door Opening Height', value: this.doorOpeningHeight },
      { name: 'Door Opening Width', value: this.doorOpeningWidth },
      { name: 'Fanlight SightLine Width', value: this.fanlightSightLineWidth },
      { name: 'Fanlight SightLine Height', value: this.fanlightSightLineHeight },
      { name: 'Fanlight Opening Width', value: this.fanlightOpeningWidth },
      { name: 'Fanlight Opening Height', value: this.fanlightOpeningHeight },
      { name: 'DoorWidth', value: this.doorWidth },
      { name: 'Door Panel Sightline Width', value: this.doorPanelSightLineWidth },
      { name: 'Door Panel Opening Width', value: this.doorPanelOpeningWidth },
      { name: 'Glass Panel Sightline Height', value: this.glassPanelSightLineHeight },
      { name: 'Glass Panel Opening Height', value: this.glassPanelOpeningHeight },
    ];

    let components = [
      this.transom,
      this.head,
      this.cill,
      this.jamb,
      this.mullion,
      this.horizontalBeads,
      this.verticalBeads,
      this.stile,
      this.topRail,
      this.midRail,
      this.bottomRail,
      this.lowerPanel,
      this.verticalGlazingBeads,
      this.horizontalGlazingBeads,
    ]
    this.components = components;
    this.dimensions = dimensions;
  }
}
