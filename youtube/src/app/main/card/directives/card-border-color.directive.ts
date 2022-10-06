import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

enum Color {
  Red = 'red',
  Green = 'green',
  Yellow = 'yellow',
}

@Directive({
  selector: '[appCardBorderColor]',
})
export class CardBorderColorDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  private appCardBorderColorEF: string;
  @Input()
  public set appCardBorderColor(value: string) {
    this.appCardBorderColorEF = value;
    this.setBorderColor(this.getMonthDifference());
  }

  private getMonthDifference(): number {
    const endDate = new Date();
    const startDate = new Date(this.appCardBorderColorEF);

    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }

  private setBorderColor(value: number): void {
    let color: Color;

    if (value > 6) {
      color = Color.Red;
    } else if (value > 1) {
      color = Color.Yellow;
    } else {
      color = Color.Green;
    }

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-color',
      color
    );
  }
}
