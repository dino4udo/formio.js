import _ from 'lodash';
import moment from 'moment';

import { getDateSetting } from '@/utils/utils';

import Rule from './Rule';

export default class MinDate extends Rule {
  defaultMessage = '{{field}} should not contain date before {{settings.dateLimit}}';

  check(value) {
      if (!value) {
          return true;
      }

      const date = moment(value);
      const minDate = getDateSetting(this.settings.dateLimit);

      if (_.isNull(minDate)) {
          return true;
      }

      minDate.setHours(0, 0, 0, 0);

      return date.isAfter(minDate) || date.isSame(minDate);
  }
};
