import _has from 'lodash/has';

import Rule from './Rule';

export default class MaxLength extends Rule {
  defaultMessage = '{{field}} must have no more than {{- settings.length}} characters.';

  check(value) {
      const maxLength = Number.parseInt(this.settings.length, 10);
      if (!value || !maxLength || !_has(value, 'length')) {
          return true;
      }
      return (value.length <= maxLength);
  }
};
