
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeLivesPage } from '../lista-de-lives/lista-de-lives';
import { HomePage } from './../home/home';


import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
	selector: 'page-lives',
	templateUrl: 'lives.html'
})
export class LivesPage {

	public sexta: Array<Object> = [];

	constructor(public navCtrl: NavController, private push: Push) {

		this.sexta = [

			{
			  "show": "https://www.youtube.com/watch?v=qyEaOzt5shg",
			  "img": "https://i.ytimg.com/vi/qyEaOzt5shg/maxresdefault.jpg",
			  "nome": "Thiago Jhonathan",
			  "data": "17H",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=1RpH5IwTr70&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/1RpH5IwTr70/maxresdefault.jpg",
			  "nome": "Sambô",
			  "data": "18H",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=KgktXwRmonA",
			  "img": "https://i.ytimg.com/vi/KgktXwRmonA/maxresdefault.jpg",
			  "nome": "Manu",
			  "data": "18H30",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=jNyhmF3NhzI&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/jNyhmF3NhzI/maxresdefault.jpg",
			  "nome": "Rangell e Batucada",
			  "data": "18H30",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=gaIeX1ucg-8&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/gaIeX1ucg-8/maxresdefault.jpg",
			  "nome": "Vicente Nery & Amigos",
			  "data": "19H",
			},
	  
	  
	  
			{
			  "show": "https://www.youtube.com/watch?v=NE4jS6We8c0&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/NE4jS6We8c0/maxresdefault.jpg",
			  "nome": "Curtindo a Vida",
			  "data": "19H",
			},
	  
	  
			{
			  "show": "https://www.youtube.com/watch?v=5COUKZ65SIo&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/5COUKZ65SIo/maxresdefault.jpg",
			  "nome": "Sérgio Lopes",
			  "data": "19H",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=3YSxofG6BZo&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/3YSxofG6BZo/maxresdefault.jpg?v=5efdfa9b&quot",
			  "nome": "Gil Mendes",
			  "data": "19H",
			},
	  
	  
			{
			  "show": "https://www.youtube.com/watch?v=QFVowgBNASc",
			  "img": "https://i.ytimg.com/vi/QFVowgBNASc/maxresdefault.jpg",
			  "nome": "Parangolé",
			  "data": "20H",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=IMeCW17Xes0",
			  "img": "https://i.ytimg.com/vi/IMeCW17Xes0/maxresdefault.jpg",
			  "nome": "Victor Bogo",
			  "data": "20H",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=9m98lB2n0PY&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/9m98lB2n0PY/maxresdefault.jpg",
			  "nome": "Wanda Sá & Nelson Faria",
			  "data": "20H",
			},
	  
	  
			{
			  "show": "https://www.youtube.com/watch?v=LsnTGgylkUY",
			  "img": "https://i.ytimg.com/vi/LsnTGgylkUY/maxresdefault.jpg",
			  "nome": "DH8",
			  "data": "20H",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=R6kW4hyOPxk",
			  "img": "https://i.ytimg.com/vi/R6kW4hyOPxk/maxresdefault.jpg",
			  "nome": "Allydi e RFélix",
			  "data": "20H",
			},
	  
	  
			{
			  "show": "https://www.youtube.com/watch?v=8WQRAkIAkZU",
			  "img": "https://i.ytimg.com/vi/8WQRAkIAkZU/maxresdefault.jpg",
			  "nome": "Live do Bem",
			  "data": "20H",
			},
	  
			{
			  "show": "https://www.youtube.com/watch?v=hpDnf0GMQn8&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/hpDnf0GMQn8/maxresdefault.jpg",
			  "nome": "Karol Conka",
			  "data": "21H",
			},
	  
			{
			  "show": "https://www.youtube.com/CeJOficial",
			  "img": "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/106361898_3520248458004290_4151798891847521305_o.jpg?_nc_cat=105&_nc_sid=9267fe&_nc_eui2=AeG2_xjEPyP8K8sQ8kzciI44GDSioyGuVaIYNKKjIa5Von7wuKfobxnDJNxH8VxMDGvLsgKGh9tFOANpdjVIOD-A&_nc_oc=AQkm8U7Tuga1f8JXLmGGPp3mz1VaN7ruJC_3f730YzZ2TPMns826eP1d_qEU1n1DWHo&_nc_ht=scontent-mia3-2.xx&oh=f5640581fd788d57706550412b8e8b47&oe=5F22F194",
			  "nome": "Carlos & Jader",
			  "data": "22H30",
			},
	  
	  
			{
			  "show": "https://www.youtube.com/watch?v=DIEyRrz_Yt8&feature=youtu.be",
			  "img": "https://i.ytimg.com/vi/DIEyRrz_Yt8/maxresdefault.jpg",
			  "nome": "Joelma",
			  "data": "22H45",
			},
	  
		  ]

		this.push.hasPermission().then((res: any) => {

			if (res.isEnabled) {
				console.log('Bem Vindo');

				const options: PushOptions = {
					android: {},
					ios: {
						alert: 'true',
						badge: true,
						sound: 'false'
					},
					windows: {},
					browser: {
						pushServiceURL: 'http://push.api.phonegap.com/v1/push'
					}
				};

				const pushObject: PushObject = this.push.init(options);


				pushObject.on('notification').subscribe((notification: any) => {
					alert(notification.message);
				});

				pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

				pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

			} else {
				console.log('Não tem permissão');
			}

		});
	}



	goToListaDeLives(params) {
		if (!params) params = {};
		this.navCtrl.push(ListaDeLivesPage);
	}

	goToHome(params) {
		if (!params) params = {};
		this.navCtrl.push(HomePage);
	}


}








