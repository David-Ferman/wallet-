import React from 'react';

export const FormErrors = ({formErrors}) =>
    <div className='is-size-7 has-text-danger'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>

