
console.log('hi')
var url_list = [];

chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
        window.tabs.forEach(function(tab){
        //collect all of the urls here
            url_list.push(tab.url);
            
      });
    });
  });
console.log(url_list);

var element = document.querySelector("p");
//console.log(document);

if (element != null){
    console.log('Element exists!');
}
else{
    console.log('hi');
}

