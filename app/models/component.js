import Model, { attr } from '@ember-data/model';

export default class ComponentModel extends Model {

  @attr name;
  @attr lengthKey;
  @attr height;
  @attr width;
  @attr depth;
  @attr count;

}
