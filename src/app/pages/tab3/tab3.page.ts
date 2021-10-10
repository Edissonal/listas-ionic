import { Component, OnInit } from '@angular/core';
import { ListasService } from '../../services/listas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
  
  id: string;
  data: any;
  estado = false;

  constructor(private listasService: ListasService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    
    this.activatedRoute.params.subscribe(res => { 

      this.id = res['id'];
      this.listasService.getuni(this.id)
        .subscribe(respu => {
          this.data = respu;
          this.estado = true;
          console.log(this.data);
      })
    });
               }
  


 
}
