import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-lista-de-lives',
  templateUrl: 'lista-de-lives.html'
})
export class ListaDeLivesPage {

  public segunda: Array<Object> = [];
  public terca: Array<Object> = [];
  public quarta: Array<Object> = [];
  public quinta: Array<Object> = [];
  public sexta: Array<Object> = [];
  public sabado: Array<Object> = [];
  public domingo: Array<Object> = [];


  constructor(public navCtrl: NavController) {

    this.segunda = [

     
     
    ]

    this.terca = [
      

    ]

    this.quarta = [

    
    ]

    this.quinta = [


    ]

    this.sexta = [

      {
        "show": "https://www.youtube.com/watch?v=-ledIB9mEn4",
        "img": "https://i.ytimg.com/vi/-ledIB9mEn4/maxresdefault.jpg",
        "nome": "Universo Alegria",
        "data": "18H",
      },

      {
        "show": "https://www.youtube.com/watch?v=xgiTRcFM8xM&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/xgiTRcFM8xM/maxresdefault.jpg?v=5f07375f&quot",
        "nome": "Os 3 do Nordeste",
        "data": "18H",
      },

      {
        "show": "https://www.youtube.com/watch?v=MA-Ot87cW_A&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/MA-Ot87cW_A/maxresdefault.jpg",
        "nome": "Roberta Sá",
        "data": "19H",
      },

      {
        "show": "https://www.youtube.com/watch?v=M6S7bDTJ5_w&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/M6S7bDTJ5_w/maxresdefault.jpg",
        "nome": "Claudia Leitte",
        "data": "19H30",
      },

      {
        "show": "https://www.youtube.com/watch?v=n6WMrXIdztw&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/n6WMrXIdztw/maxresdefault.jpg",
        "nome": "Vini & Lucas",
        "data": "19H30",
      },

      {
        "show": "https://www.youtube.com/watch?v=qB3q09eY-Ao&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/qB3q09eY-Ao/maxresdefault.jpg",
        "nome": "Cabaré do Brega",
        "data": "20H",
      },

      {
        "show": "https://www.youtube.com/watch?v=uSUSmVCAj2o&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/uSUSmVCAj2o/maxresdefault.jpg?v=5f070414&quot",
        "nome": "Lucimar",
        "data": "20H",
      },

      {
        "show": "https://www.youtube.com/watch?v=G3sJvdLfbqY&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/G3sJvdLfbqY/maxresdefault.jpg",
        "nome": "Samyra Show",
        "data": "20H",
      },

      {
        "show": "https://www.youtube.com/watch?v=4L1d4tCQUjg&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/4L1d4tCQUjg/maxresdefault.jpg",
        "nome": "Silvanno Salles",
        "data": "20H",
      },

      {
        "show": "https://www.youtube.com/watch?v=R6Jpd7g79jQ&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/iqlE7bwNRwA/maxresdefault.jpg",
        "nome": "Sandro DJ",
        "data": "21H",
      },

      {
        "show": "https://www.youtube.com/watch?v=rut79MEIZBg&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/rut79MEIZBg/maxresdefault.jpg",
        "nome": "Edson Lima & Daniel Dial",
        "data": "21H",
      },

      {
        "show": "https://www.youtube.com/watch?v=PgJZb8-Ooek&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/PgJZb8-Ooek/maxresdefault.jpg?v=5f062a2a&quot",
        "nome": "Zezé de Camargo & Luciano",
        "data": "21H30",
      },



    ]

    this.sabado = [

      {
        "show": "https://www.youtube.com/watch?v=TCQlIlVPguI&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/TCQlIlVPguI/maxresdefault.jpg",
        "nome": "Targino Gondim",
        "data": "14H",
      },

      {
        "show": "https://www.youtube.com/channel/UCM90FaSFuIXwj6-oZMrbNsA",
        "img": "https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/s960x960/106998137_3274013125975065_1432169805571487098_o.jpg?_nc_cat=111&_nc_sid=9e2e56&_nc_eui2=AeGwfIn4_CXpBasH0_K1OQksH0c3cqP8T_YfRzdyo_xP9p3lGuxHAfNaSKgxsCd1lBqoloIzpxRl5imi-odaLfWL&_nc_oc=AQk3V2Y7vIvbtbIhA--p82Cqr6hK6KM_MmTI3cs_FkgCMHZZ2YgMALB-JIgFnYVNDgE&_nc_ht=scontent.fjdo10-2.fna&_nc_tp=7&oh=0905665714f9bb411234162449e96611&oe=5F2E776F",
        "nome": "Mastruz com Leite",
        "data": "15H",
      },

      {
        "show": "https://www.youtube.com/watch?v=xMXSeD0egrc&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/xMXSeD0egrc/maxresdefault.jpg?v=5ef64b03&quot",
        "nome": "Douglas Sampa",
        "data": "15H",
      },

      {
        "show": "https://www.youtube.com/watch?v=1Q8qwm-8U-Q&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/1Q8qwm-8U-Q/maxresdefault.jpg",
        "nome": "Raí Saia Rodada",
        "data": "16H",
      },

      {
        "show": "https://www.youtube.com/watch?v=8-i19MEbf0Y&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/8-i19MEbf0Y/maxresdefault.jpg",
        "nome": "Mania de Ser",
        "data": "16H",
      },

      {
        "show": "https://www.youtube.com/watch?v=EomKOwcjnHU&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/EomKOwcjnHU/maxresdefault.jpg",
        "nome": "Samba de Mesa",
        "data": "16H",
      },

      {
        "show": "https://www.youtube.com/watch?v=RN8MMHHPmlo&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/RN8MMHHPmlo/maxresdefault.jpg",
        "nome": "Mauricio Maniere",
        "data": "17H",
      },

      {
        "show": "https://www.youtube.com/watch?v=nxcRO-37HSI&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/nxcRO-37HSI/maxresdefault.jpg",
        "nome": "Cesar & Paulinho",
        "data": "17H",
      },

      {
        "show": "https://www.youtube.com/watch?v=-5HmZs8Yxy0&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/-5HmZs8Yxy0/maxresdefault.jpg",
        "nome": "Katinguelê",
        "data": "17H",
      },

      {
        "show": "https://www.youtube.com/watch?v=oFBO_Hx61xA&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/oFBO_Hx61xA/maxresdefault.jpg",
        "nome": "Thalles Roberto",
        "data": "17H",
      },

      {
        "show": "https://www.youtube.com/watch?v=E22Y5VUb9Fc&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/E22Y5VUb9Fc/maxresdefault.jpg",
        "nome": "Amizade Serta",
        "data": "17H30",
      },

      {
        "show": "https://www.youtube.com/watch?v=7ec5v99lHAY&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/7ec5v99lHAY/maxresdefault.jpg",
        "nome": "Zizi Possi",
        "data": "18H",
      },

      {
        "show": "https://www.youtube.com/watch?v=AlrFBjNh7Zw",
        "img": "https://i.ytimg.com/vi/AlrFBjNh7Zw/maxresdefault.jpg?v=5f07e522&quot",
        "nome": "Forrozão Baby Som",
        "data": "18H",
      },

      {
        "show": "https://www.youtube.com/watch?v=DeJYsX4NDcs&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/DeJYsX4NDcs/maxresdefault.jpg",
        "nome": "Wesley Safadão & Xand",
        "data": "20H",
      },
      

    ]



    this.domingo = [

      {
        "show": "https://www.youtube.com/watch?v=GvzV8_yUET8&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/GvzV8_yUET8/maxresdefault.jpg",
        "nome": "Serginho da Portela",
        "data": "12H30",
      },

      {
        "show": "https://www.youtube.com/channel/UCo7jyJquwgqqF6PtgvPFUFQ",
        "img": "https://firebasestorage.googleapis.com/v0/b/showsdelives.appspot.com/o/rannyere.JPG?alt=media&token=afcc330d-94ba-499f-8a1e-11e57e5ee438",
        "nome": "Ranniery Gomes",
        "data": "14H",
      },

      {
        "show": "https://www.youtube.com/watch?v=1docM2r10LM&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/1docM2r10LM/maxresdefault.jpg",
        "nome": "Juninho Thybau",
        "data": "14H",
      },

      {
        "show": "https://www.youtube.com/watch?v=N9hzD5C72Xk&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/N9hzD5C72Xk/maxresdefault.jpg",
        "nome": "Seu Maxixe",
        "data": "17H",
      },

      {
        "show": "https://www.youtube.com/watch?v=ek_RAnvjL-8&feature=youtu.be",
        "img": "https://i.ytimg.com/vi/ek_RAnvjL-8/maxresdefault.jpg?v=5efe2433&quot",
        "nome": "Nerd Rock",
        "data": "18H",
      },


      {
        "show": "https://www.youtube.com/user/BandaEncantus1",
        "img": "https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/s960x960/107257545_3105156416228957_2840607175679100737_o.jpg?_nc_cat=100&_nc_sid=2d5d41&_nc_eui2=AeEPblKGnAqhx1-m5ey9gcvgzOsOMO-ZS2jM6w4w75lLaMrFbpWw7YNRjEJkyeRWkbeCuYAuBu5swJW3iKCMNDuu&_nc_oc=AQkqXezYT-EJBopImLKAJz7CrCo51xY9FOGJSFp1izjNQYAWj3RSAoEuiY6pOvq5WrA&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=7&oh=a4374f1694da953c7abdfa64eabfb6d2&oe=5F2A3B79",
        "nome": "Banda Encantus",
        "data": "20H",
      },

     


    ]










  }

}
