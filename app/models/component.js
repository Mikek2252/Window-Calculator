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
    let heightInFeet = (this.height / MM_TO_FEET);
    let widthInFeet = (this.width / MM_TO_FEET);
    let depthInFeet = (this.depth / MM_TO_FEET);
    return (heightInFeet * widthInFeet * depthInFeet).toFixed(4);
  }

  get cubicMeters() {
    let heightInMeters = (this.height / 1000);
    let widthInMeters = (this.width / 1000);
    let depthInMeters = (this.depth / 1000);
    return (heightInMeters * widthInMeters * depthInMeters).toFixed(4);
  }
}
