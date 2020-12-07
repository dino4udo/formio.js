import baseEditForm from '../textfield/TextField.form';

import CurrencyEditData from './editForm/Currency.edit.data';
import CurrencyEditDisplay from './editForm/Currency.edit.display';
export default function(...extend) {
    return baseEditForm([
        {
            key: 'display',
            components: CurrencyEditDisplay,
        },
        {
            key: 'data',
            components: CurrencyEditData,
        },
        {
            key: 'validation',
            components: [
                {
                    key: 'validate.minLength',
                    ignore: true,
                },
                {
                    key: 'validate.maxLength',
                    ignore: true,
                },
                {
                    key: 'validate.minWords',
                    ignore: true,
                },
                {
                    key: 'validate.maxWords',
                    ignore: true,
                },
                {
                    key: 'validate.pattern',
                    ignore: true,
                },
            ],
        },
    ], ...extend);
}
