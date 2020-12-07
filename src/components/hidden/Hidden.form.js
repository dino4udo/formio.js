import baseEditForm from '../_classes/component/Component.form';

import HiddenEditData from './editForm/Hidden.edit.data';
import HiddenEditDisplay from './editForm/Hidden.edit.display';

export default function (...extend) {
    return baseEditForm([
        {
            key: 'display',
            components: HiddenEditDisplay,
        },
        {
            key: 'data',
            components: HiddenEditData,
        },
        {
            key: 'validation',
            ignore: true,
        },
        {
            key: 'conditional',
            ignore: true,
        },
    ], ...extend);
}
