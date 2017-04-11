videojs.plugin('videolist', function () {
//    var player = videojs('myPlayerID');   
    var player = this;
    player.muted(true); 
    
    var NewDiv1 = document.createElement('div');
        NewDiv1.setAttribute('id','dropdown');
    
    var NewImg = document.createElement('img');
        NewImg.src = 'https://cdn4.iconfinder.com/data/icons/bold-purple-free-samples/32/List_Text_Menu_Numbers_String_Burger-20.png';
        NewImg.setAttribute('id','dropImg');

    var spacer = document.getElementsByClassName('vjs-spacer')[0];
        NewDiv1.appendChild(NewImg);
        spacer.appendChild(NewDiv1);

    var NewDiv2 = document.createElement('div');
        NewDiv2.setAttribute('class','mydropdown');
//        movieName = NewDiv2.childNodes; 
    
    
        var tt, jsonData, sec, cn, fr, en;
//將data存在textTracks裡,從Json轉成JS物件存取出來
    player.one("loadedmetadata", function () {
        console.log("one here");
        tt = player.textTracks()[1];
        console.log(tt);
        tt.oncuechange = function (){
            if (tt.activeCues[0] !== undefined){
                jsonData = JSON.parse(tt.activeCues[0].text);
                console.log(jsonData);
                sec = jsonData.sec;
                console.log(sec);
                en = jsonData.language.English;
                fr = jsonData.language.France;
                cn = jsonData.language.Chinese;
                console.log(fr + 'in1');
                console.log(en);
            }
        }
    });  
//    var abc = 'abc';
//    console.log(fr + 'out2');
//    for (var i=0; i<6; i++) {   
//    var NewBS1 = document.createElement('div');
//        NewBS1.appendChild(document.createTextNode(en[i]));
//        NewDiv2.appendChild(NewBS1);          
//        spacer.appendChild(NewDiv2);
//        addMovieClickEvent(en[i], Sec[i]);
//    }
//    
//    function addMovieClickEvent (node, secs) {
//        node.onclick = function() { player.currentTime(secs); }
//    } 
    
    //show dropdown        
    NewImg.onclick = function () {
        NewDiv2.classList.toggle("show");
    };
    
    //旁邊關閉dropdown    
    window.onclick = function(event) {    
        if (!event.target.matches('#dropImg')) { 
            if(NewDiv2.classList.contains('show')){
                NewDiv2.classList.remove('show');
            }
        }
    }


});