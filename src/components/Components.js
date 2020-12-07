import _ from 'lodash';
import _has from 'lodash/has';

import Component from './_classes/component/Component';
import EditFormUtils from './_classes/component/editForm/utils';

export default class Components {
    static get EditFormUtils() {
        return EditFormUtils;
    }

    static get components() {
        if (!Components._components) {
            Components._components = {};
        }
        return Components._components;
    }

    static setComponents(comps) {
    // Set the tableView method on BaseComponent.
        if (comps.base) {
            // Implement the tableView method.
            comps.base.tableView = function (value, options) {
                const comp = Components.create(options.component, options.options || {}, options.data || {}, true);
                return comp.getView(value);
            };
        }
        _.assign(Components.components, comps);
    }

    static addComponent(name, comp) {
        return Components.setComponent(name, comp);
    }

    static setComponent(name, comp) {
        Components.components[name] = comp;
    }

    static create(component, options, data) {
        let comp = null;
        if (component.type && _has(Components.components, component.type)) {
            comp = new Components.components[component.type](component, options, data);
        }
        else if (component.arrayTree) {
            // eslint-disable-next-line new-cap
            comp = new Components.components.datagrid(component, options, data);
        }
        else if (component.tree) {
            // eslint-disable-next-line new-cap
            comp = new Components.components.nesteddata(component, options, data);
        }
        else if (Array.isArray(component.components)) {
            // eslint-disable-next-line new-cap
            comp = new Components.components.nested(component, options, data);
        }
        else {
            comp = new Component(component, options, data);
        }
        return comp;
    }
}
