import { Component } from '@angular/core';
import { ListasService } from '../../services/listas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  items: any[] = [];
  
  constructor(private listasService: ListasService,
              private router:Router) { }

  ngOnInit(): void {
    this.mostrarli();
  }

  mostrarli() {
    this.listasService.getposteo()
      .subscribe((res:any) => {
        this.items = res;

        console.log(this.items );
    })
  }

  datos(id:string) {
   this.router.navigateByUrl(`/tabs/tab3/${id}`);
  }
 

}
