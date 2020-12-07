import _ from 'lodash';

import webform from '@/Webform';

import pdf from '../PDF';
import wizard from '../Wizard';

export default class Displays {
  static displays = {
      pdf,
      webform,
      wizard,
  };

  static addDisplay(name, display) {
      Displays.displays[name] = display;
  }

  static addDisplays(displays) {
      Displays.displays = _.merge(Displays.displays, displays);
  }

  static getDisplay(name) {
      return Displays.displays[name];
  }

  static getDisplays() {
      return Displays.displays;
  }
}
