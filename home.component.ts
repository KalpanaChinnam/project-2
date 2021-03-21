import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
image = 'https://karenpavonesfoodforthought.files.wordpress.com/2014/08/cookingguruphoto.jpg';
tea = 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
idly = 'https://chakriskitchen.com/wp-content/uploads/2018/12/Idly19-500x500.jpg';
omlet = 'https://healthyplanbyann.com/wp-content/uploads//2017/06/omlet-z-marchewska.jpg';
brownrice = 'https://www.recipetineats.com/wp-content/uploads/2020/09/Perfectly-Cooked-Brown-Rice_7-SQ.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
