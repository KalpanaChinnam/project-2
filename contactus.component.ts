import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  imag = 'https://media.istockphoto.com/photos/hand-pressing-a-contact-us-button-picture-id487923098?k=6&m=487923098&s=612x612&w=0&h=fzAGlVKaTlnYJuZpRCD9ScQcyOzonwtwvOGMmvZBO1U='
  constructor() { }

  ngOnInit(): void {
  }

}
