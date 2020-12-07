import Actions from './actions';
import Calculated from './calculatedfields';
import ClearOnHide from './clearOnHide';
import Conditions from './conditions';
// import ClearOnHide2 from './clearOnHide2';
import DateFields from './datefields';
import EmailAction from './emailaction';
import FieldLogic from './fieldLogic';
// import NestedFormTests from './nested-form-tests';
// import NestedFormNoSubmit from './nested-nosubmit.js';
// import NestedConditionallyHidden from './conditional-nested-form-load.js';
// import WysiwygCursor from './wysiwygCursor';
// import ChildMetadata from './childMetadata';
import NestedFormValidation from './nested-form-validation';
import Simple from './simple';
import SubmissionSetter from './submissionSetter';

export default [
    Simple,
    SubmissionSetter,
    Conditions,
    Calculated,
    DateFields,
    FieldLogic,
    Actions,
    EmailAction,
    // ClearOnHide2,
    // NestedFormTests,
    NestedFormValidation,
    // NestedFormNoSubmit,
    // NestedConditionallyHidden,
    // ChildMetadata,
    // WysiwygCursor
    ClearOnHide,
];
