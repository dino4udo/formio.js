import moment from 'moment';

const Rule = require('./Rule');

module.exports = class Time extends Rule {
   defaultMessage = '{{field}} must contain valid time';

   check(value) {
       if (this.component.isEmpty(value)) return true;
       return moment(value, this.component.component.format).isValid();
   }
};
