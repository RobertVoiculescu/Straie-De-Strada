import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaddproducts',
  templateUrl: './adminaddproducts.component.html',
  styleUrls: ['./adminaddproducts.component.css']
})
export class AdminaddproductsComponent implements OnInit {

  public selectedFile:any;
  imgURL: any;

  constructor(private router:Router){

  }
  ngOnInit(): void {

  }

  public onFileChanged(event:any) {

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
    };

  }

  saveBook(){
    alert("Produs adăugat cu succes");
    this.router.navigate(['/adminaddproduct']);
  }
}
