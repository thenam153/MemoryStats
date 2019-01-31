chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {	
  		chrome.system.memory.getInfo(function(memoryInfo) {
	        var usedMemory = Math.round(memoryInfo.availableCapacity / memoryInfo.capacity *10000)/100;
	       	sendResponse({data: usedMemory})
		});
		return true;	
  });

