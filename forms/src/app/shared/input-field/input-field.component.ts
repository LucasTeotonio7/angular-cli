import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() classCss: any;
  @Input() id!: string;
  @Input() label!: string;
  @Input() type = 'text';
  @Input() control: any;
  @Input() isReadOnly = false;


  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any){
    if (v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  public onTouchedCb: any = () => {};
  public onChangeCb: any = () => {};

  writeValue(v: any): void {
    if(v !== this.innerValue){
      this.value = v;
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }


}
