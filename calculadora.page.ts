import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  expression: string = '';

  ngOnInit() {
  }

  addToExpression(value: string) {
    this.expression += value;
  }

  addOperator(operator: string) {
    this.expression += operator;
  }

  clearExpression() {
    this.expression = '';
  }

  calculateResult() {
    try {
      this.expression = eval(this.expression);
    } catch (error) {
      this.expression = 'Error';
    }
  }
}