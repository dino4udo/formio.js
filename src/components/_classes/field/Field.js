import Component from '../component/Component';

export default class Field extends Component {
    render(element) {
        if (this.noField) {
            return super.render(element);
        }
        if (this.isAdvancedLabel) {
            return super.render(this.renderTemplate('field', {
                ...this.getLabelInfo(),
                labelMarkup: this.renderTemplate('label'),
                element,
            }, 'align'));
        }

        return super.render(this.renderTemplate('field', {
            labelMarkup: this.renderTemplate('label'),
            element,
        }));
    }
}
