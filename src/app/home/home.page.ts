import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ellipsisVertical } from 'ionicons/icons';
import { FileInfo } from '@capacitor/filesystem';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class HomePage implements OnInit {
  isIOS: boolean = false;
  pdfFiles: FileInfo[] = [];
  constructor(private platform: Platform) {
    addIcons({ellipsisVertical});
    this.isIOS = this.platform.is('ios');
  }

  ngOnInit() {
  }

}
