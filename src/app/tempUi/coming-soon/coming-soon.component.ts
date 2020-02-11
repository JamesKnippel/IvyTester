import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  name: '';
  email: '';
  subscriberCollection: AngularFirestoreCollection<any>;
  subscribed: boolean = false;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.subscriberCollection = this.afs.collection('subscribers');
  }

  subscribe(name, email) {
    const data = {
      name: name,
      email: email,
    };
    
    this.subscriberCollection.add(data)
      .then(() => {
        console.log('added');
        this.subscribed = true;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
