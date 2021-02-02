import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedIndex:0;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    const tabindex = this.route.snapshot.params['tabindex'];
    if(tabindex === undefined)
    {
      this.selectedIndex =0;
    }else
    {
      this.selectedIndex =tabindex;
    }
  }

}
