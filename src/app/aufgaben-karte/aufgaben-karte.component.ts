import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aufgaben-karte',
  templateUrl: './aufgaben-karte.component.html',
  styleUrls: ['./aufgaben-karte.component.css']
})
export class AufgabenKarteComponent implements OnInit {
  isVisibleAufgabeErstellen = true;
  isVisibleAufgabeLueckentext = false;
  isVisibleAufgabeMultipleChoice = false;
  formData = new AufgabeMetaData();
  teilaufgaben: Teilaufgabe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  submit(formData: NgForm) {
    this.formData = formData.value;
    if (this.formData.art == "Lückentext")
    {
      this.isVisibleAufgabeErstellen = false;
      this.isVisibleAufgabeLueckentext = true;
    }
    else if (this.formData.art == "Multiple Choice")
    {
      this.isVisibleAufgabeErstellen = false;
      this.isVisibleAufgabeMultipleChoice = true;
    }
  }

  addPart(formData: NgForm) {
    let teilaufgabe = formData.value;
    this.teilaufgaben.push(teilaufgabe);
    formData.resetForm();
  }

  aufgabeSpeichern() {
    let aufgabe: Aufgabe;
    aufgabe.metaData = this.formData;
    aufgabe.teilaufgaben = this.teilaufgaben;
  }
}

export class AufgabeMetaData {
  ueberschrift: string;
  beschreibung: string;
  art: string;
  typ: string[];
}

export class Teilaufgabe {
  luecke: string;
  vorLuecke: string;
  nachLuecke: string;
}

export class Aufgabe {
  metaData: AufgabeMetaData;
  teilaufgaben: Teilaufgabe[] = [];
}