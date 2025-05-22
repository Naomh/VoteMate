import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'UI-code-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CodeFormComponent],
  templateUrl: './code-form.component.html',
  styleUrl: './code-form.component.scss'
})
export class CodeFormComponent {
  // #region Properties
  @Input() length = 6;
  @Output() change = new EventEmitter<string>();
  protected codeFormArray!: FormArray;
  // #endregion

  // #region Constructor
  constructor(private fb: FormBuilder) {}
  // #endregion

  // #region Lifecycle Hooks
  protected ngOnInit(): void {
    this.codeFormArray = this.fb.array(
      Array(this.length).fill('').map(() => new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9a-zA-Z]/)
      ]))
    );
  }
  // #endregion

  // #region Getters
  public get controls(): FormControl[] {
    return this.codeFormArray.controls as FormControl[];
  }

  public getCode(): string {
    return this.codeFormArray.value.join('');
  }
  // #endregion

  // #region Event Handlers
  protected onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (value.length === 1 && index < this.length - 1) {
      const nextInput = document.querySelectorAll<HTMLInputElement>('.code-inputs input')[index + 1];
      nextInput?.focus();
    }
    this.change.emit(this.getCode());
  }

  protected onKeyDown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && input.value === '' && index > 0) {
      const prevInput = document.querySelectorAll<HTMLInputElement>('.code-inputs input')[index - 1];
      prevInput?.focus();
    }

    if (event.key.length === 1 && input.value.length === 1) {
      input.value = '';
    }
    this.change.emit(this.getCode());
  }

  protected onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const paste = (event.clipboardData || new DataTransfer()).getData('text').slice(0, this.length);
    paste.split('').forEach((char, i) => {
      if (this.codeFormArray.at(i)) {
        this.codeFormArray.at(i).setValue(char);
      }
    });
    const inputs = document.querySelectorAll<HTMLInputElement>('.code-inputs input');
    inputs[paste.length - 1]?.focus();
    this.change.emit(this.getCode());
  }
  // #endregion
}
