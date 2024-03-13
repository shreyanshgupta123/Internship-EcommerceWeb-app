import { Component, OnInit } from '@angular/core';
import { LocationCheckService } from '../../Services/location-check.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrl: './pincode.component.scss'
})
export class PincodeComponent implements OnInit {
  locationData: any;
  errorMessage: string | undefined;

  constructor(private locationCheckService: LocationCheckService) { }

  ngOnInit(): void {
    // const distric= localStorage.getItem('District')
    // this.locationData= JSON.parse(distric!);
  }
  getLocationData(pincode: string): void {
    this.locationCheckService.pincode(pincode).subscribe(
      (data) => {
        if (data && data.length > 0 && data[0].PostOffice && data[0].PostOffice.length > 0) {
          const district = data[0].PostOffice[0];
          localStorage.setItem("District", district);
          console.log(district);
          this.locationData=district
        } else {
          this.errorMessage = 'Invalid Pincode.';
          console.error('Invalid data format:', data);
        }
      },
      (error) => {
        this.errorMessage = 'Error fetching location data. Please try again later.';
        console.error(error);
      }
    );

  }


}
