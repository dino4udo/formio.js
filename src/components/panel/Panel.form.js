import nestedComponentForm from '../_classes/nested/NestedComponent.form';

import PanelEditConditional from './editForm/Panel.edit.conditional';
import PanelEditDisplay from './editForm/Panel.edit.display';

export default function(...extend) {
    return nestedComponentForm([
        {
            key: 'display',
            components: PanelEditDisplay,
        },
        {
            key: 'conditional',
            components: PanelEditConditional,
        },
    ], ...extend);
}
