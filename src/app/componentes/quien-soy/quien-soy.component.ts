import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import AOS from 'aos';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  public initView = false;
  public initWho = false;
  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
    AOS.init();
    setTimeout(() => {
      this.initView = true;
    }, 1000);
    setTimeout(() => {
      this.initWho = true;
    }, 1500);
  }

  navigateTo(id: string, duration: number) {
    this.animateScrollService.scrollToElement(id, duration);
  }

}
