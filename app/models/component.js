import Model, { attr } from '@ember-data/model';

const MM_TO_FEET = 305;

export default class ComponentModel extends Model {

  @attr name;
  @attr lengthKey;
  @attr height;
  @attr width;
  @attr depth;
  @attr count;

  get cubicFeet() {
    let heightInFeet = ((this.height * 100) / MM_TO_FEET) / 100;
    let widthInFeet = ((this.width * 100) / MM_TO_FEET) / 100;
    let depthInFeet = ((this.depth * 100) / MM_TO_FEET) / 100;
    return heightInFeet * widthInFeet * depthInFeet;
  }

}
