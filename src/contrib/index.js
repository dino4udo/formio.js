import EditTableComponent from './edittable/EditTable';
import LocationComponent from './location/Location';
import ModalEdit from './modaledit/ModalEdit';
import StripeCheckoutComponent from './stripe/checkout/StripeCheckout';
import StripeComponent from './stripe/stripe/Stripe';

const Contrib = {
    stripe: {
        stripe: StripeComponent,
        checkout: StripeCheckoutComponent,
    },
    location: LocationComponent,
    edittable: EditTableComponent,
    modaledit: ModalEdit,
};

export default Contrib;
if (typeof global === 'object' && global.Formio) {
    global.Formio.contrib = Contrib;
}
