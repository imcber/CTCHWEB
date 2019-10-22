import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-inside-view',
  templateUrl: './inside-view.component.html',
  styleUrls: ['./inside-view.component.scss']
})
export class InsideViewComponent implements OnInit {

  private _arrayTitleNB: Array<Object> = [
    {text:"Teachece",size:"4"},
    {text:"Tienda",size:"4"},
    {text:"Mapa Verde",size:"4"},
    {text:"Nosotros",size:"4"}
  ];
  public _arrayCarrouselIMC: Array<Object> = [
    {img:"cuboEspacial.png",title:"Cubo Espacial",subTitle:"Si lo que quieres es comenzar a cultivar ya y no cuentas con mucho presupuesto, este sistema es ideal para ti.",visible:true,color:"#000000",mainVisible:true},
    {img:"logoY.png",title:"Club Cannábico",subTitle:"Organización en busca del impulso y mejora de la cultura cannábica.",visible:false,color:"#20372b",mainVisible:true},
    {img:"blogIMG.png",title:"Nuestro Blog",subTitle:"Descubre los articulos por parte del club.",visible:false,color:"#f8a977",mainVisible:true}
  ];
  private _insideViewColor: String = "#000000";
  public _bandVisibleMainView: Boolean = false;

  constructor(private _el:Renderer2) { }

  ngOnInit() {
  }
  _onActiveSlideChange($event){
    this._arrayCarrouselIMC.forEach(obj=>{
      obj["visible"] = false;
    });
    this._arrayCarrouselIMC[$event.relatedTarget]["visible"] = true;
    this._insideViewColor = this._arrayCarrouselIMC[$event.relatedTarget]["color"];
  }

  showMyView(item){
    this._bandVisibleMainView = true;
    this._arrayCarrouselIMC.forEach(obj=>{
      obj["mainVisible"] = true;
    });
    item.mainVisible = !item.mainVisible;
  }
  
  public _homeCF(){
    console.log(this._bandVisibleMainView);
    this._bandVisibleMainView = false;
    this._arrayCarrouselIMC.forEach(obj=>{
      obj["mainVisible"] = true;
    });
  }

}
