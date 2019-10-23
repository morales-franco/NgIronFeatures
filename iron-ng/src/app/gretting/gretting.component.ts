import { Component, OnInit } from '@angular/core';

//@FM: Reference to JS sayHelloTo() / logName() / doSomenthing() in assets/js/custom.js
declare function sayHelloTo(name : any);
declare function logName(name : any);
declare function doSomething();

//@FM: Reference to IronValidator object validator  specified in  assets/js/iron-rules.js
declare const ironValidator:any; 

//@FM: Integrating JQuery
import $ from 'jquery';


@Component({
  selector: 'app-gretting',
  templateUrl: './gretting.component.html',
  styles: []
})
export class GrettingComponent implements OnInit {

  helloTo : string =  "";

  constructor() { }

  ngOnInit() {
  }

  onClickSayHello(){
    sayHelloTo(this.helloTo);
    logName(this.helloTo);
    doSomething();

    ironValidator.validateName(this.helloTo);
    ironValidator.validateNBusinessRules(this.helloTo);

    //Using JQuery
    var data = $('#say-hello-id').val();
    console.log("showing from Jquery " + data);

  }

}
