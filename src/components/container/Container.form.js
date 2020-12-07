import baseEditForm from '../_classes/component/Component.form';

import ContainerEditData from './editForm/Container.edit.data';
import ContainerEditDisplay from './editForm/Container.edit.display';

export default function (...extend) {
    return baseEditForm([
        {
            key: 'display',
            components: ContainerEditDisplay,
        },
        {
            key: 'data',
            components: ContainerEditData,
        },
    ], ...extend);
}
