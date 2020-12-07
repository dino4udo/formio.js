import textEditForm from '../textfield/TextField.form';

import PasswordEditData from './editForm/Password.edit.data';
import PasswordEditDisplay from './editForm/Password.edit.display';
import PasswordEditValidation from './editForm/Password.edit.validation';

export default function(...extend) {
    return textEditForm([
        {
            key: 'data',
            components: PasswordEditData,
        },
        {
            key: 'display',
            components: PasswordEditDisplay,
        },
        {
            key: 'validation',
            components: PasswordEditValidation,
        },
    ], ...extend);
}
