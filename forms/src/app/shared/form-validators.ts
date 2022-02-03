import { AbstractControl, FormArray, FormControl, ValidatorFn } from "@angular/forms";

export class FormValidations {

    static minSelectedCheckboxes(min:number = 1) {
        const validator: ValidatorFn = (formArray: AbstractControl) => {
        if (formArray instanceof FormArray) {
            const totalSelected = formArray.controls
            .map((control) => control.value)
            .reduce((prev, next) => (next ? prev + next : prev), 0);
            return totalSelected >= min ? null : { required: true };
        }

        throw new Error('formArray is not an instance of FormArray');
        };

        return validator;
    }

    static cepValidator(control: FormControl){

        const cep = control.value;

        if (cep && cep !== ''){
            var validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { InvalidCep : true}
        }

        return null;
    }

}