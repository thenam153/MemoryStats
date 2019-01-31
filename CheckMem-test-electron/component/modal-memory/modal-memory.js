const componentName = "modalMemory";
module.exports.name = componentName;
var angular = require('angular');
var app = angular.module(componentName,[]);

var isElectron = require("is-electron");

require('./modal-memory.css');

app.component(componentName,{
	template: require('html-loader!./modal-memory.html'),
	controller: ModalMemoryController,
	controllerAs: 'self'
});

function ModalMemoryController($scope,$interval){
	console.log("Memory info!");
	$scope.percentShow = 'NA';
	if(isElectron()){
		try{
			var ipcRenderer = require('electron').ipcRenderer;
		    $interval(function(){
			    ipcRenderer.send('checkMem');
			},500);
			ipcRenderer.on('sendMem',function(e,mem){
				var percent = Math.round(mem.freemem * 10000/mem.totalmem)/100;
			    document.getElementById("modalMemory").innerHTML = percent+'%';
			})
		}
		catch(err) {
			console.log(err);
		}
	}else{
		$interval(function(){
			if(angular.element('#modalMemory').text().trim() == 'NA' ) alert('Bạn chưa cài extensions kiểm tra dung lượng ram trống!');
		},3000);
	}
	
}
