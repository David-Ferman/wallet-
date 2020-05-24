import React, { PureComponent } from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

// eslint-disable-next-line react/prefer-stateless-function
class FormComponent extends PureComponent {
  render() {
    return (
      <form className="form" >
        <div className="form__form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label className="form__form-group-label">Input Label</label>
          <div className="form__form-group-field">
            <Field
              name="input"
              component="input"
              type="text"
              placeholder="..."
            />
          </div>
        </div>
        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Submit</Button>
          {/* eslint-disable-next-line no-undef */}
          <Button type="button" >
                        Cancel
          </Button>
        </ButtonToolbar>
      </form>
    );
  }
}

export default reduxForm({
  form: 'example_form', // a unique identifier for this form
})(FormComponent);
