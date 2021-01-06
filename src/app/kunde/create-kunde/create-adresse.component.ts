import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import type { FormGroup } from '@angular/forms';
import type { OnInit } from '@angular/core';
// import { MyAdresse } from '../shared/kunde';

/**
 * Komponente mit dem Tag &lt;hs-create-adresse&gt;, um das Erfassungsformular
 * f&uuml;r ein neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-adresse',
    templateUrl: './create-adresse.component.html',
})
export class CreateAdresseComponent implements OnInit {
    @Input()
    readonly form!: FormGroup;

    // adresse: MyAdresse;

    readonly plz = new FormControl(undefined, Validators.required);

    readonly ort = new FormControl(undefined, Validators.required);
    // readonly plz = new FormControl(undefined);
    // readonly ort = new FormControl(undefined);

    ngOnInit() {
        console.log('CreateAdresseComponent.ngOnInit');
        // siehe formControlName innerhalb @Component({templateUrl: ...})
        this.form.addControl('plz', this.plz);
        this.form.addControl('ort', this.ort);
    }
}
