import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsComponent } from './reactive-forms.component';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ ReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test reactive forms the form way', () => {
    let selectComponent = component.profileForm.controls['carsSelect']
    let inputComponent = component.profileForm.controls['lastName']

    expect(selectComponent.valid).toBeFalsy()
    expect(inputComponent.valid).toBeFalsy()
    expect(component.profileForm.valid).toBeFalsy()
    
    selectComponent.setValue('saab')
    inputComponent.setValue('Tluszczoslawski')

    expect(selectComponent.valid).toBeTruthy()
    expect(inputComponent.valid).toBeTruthy()
    expect(component.profileForm.valid).toBeTruthy()
    component.callButton()
    expect(component.formOutput).toEqual({carsSelect: 'saab', lastName: 'Tluszczoslawski'})
  });


  it('test reactive forms ui way', () => {
    let selectComponent = component.profileForm.controls['carsSelect']
    let inputComponent = component.profileForm.controls['lastName']

    expect(selectComponent.valid).toBeFalsy()
    expect(inputComponent.valid).toBeFalsy()
    expect(component.profileForm.valid).toBeFalsy()
    
    let formSelectCar = fixture.nativeElement.querySelector("#cars")
    let formInputName = fixture.nativeElement.querySelector("#last-name")
    formSelectCar.value = 'saab'
    formSelectCar.dispatchEvent(new Event('change'))
    formInputName.value = 'Tluszczoslawski'
    formInputName.dispatchEvent(new Event('input'))
    fixture.detectChanges()


    fixture.whenStable().then(() => {
      expect(selectComponent.valid).toBeTruthy()
      expect(inputComponent.valid).toBeTruthy()
      expect(component.profileForm.valid).toBeTruthy()
      component.callButton()
      expect(component.formOutput).toEqual({carsSelect: 'saab', lastName: 'Tluszczoslawski'})
    })

  });
});
