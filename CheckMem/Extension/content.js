setInterval(function(){
	chrome.runtime.sendMessage({check: 'memory'},
	    function (data) {
	        // console.log(data);
	        document.getElementById("modalMemory").innerHTML = data.data+'%';
	    }
	);
},500);