let ns="http://www.w3.org/2000/svg";let crtob=0;let nxt=1;let nxtexo=1;let selection=23;
function get_ord1(idt){rang=parseInt(idt[idt.length-1]);}
function get_ord2(idt){ let f=parseInt(idt[idt.length-2]+idt[idt.length-1]);
 rang=f+4;}
function get_ord3(idt){let d=parseInt(idt[idt.length-3]+idt[idt.length-2]);let r=parseInt(idt[idt.length-1]);
    rang=3*(d-1)+r+18;             }

function playings(ord){for(let t=0;t<61;t++){if(sndnum[t]==1){sndnum[t]=0;sndtab[t].pause();sndtab[ord].play();}}}
function cls(){let el;let slct;let bod;bod=document.querySelector('#tabl');

for(let i=1;i<5;i++){el=document.querySelector('#sv'+i);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','sv'+i);
bod.removeChild(el);bod.append(slct); } 
bod=document.querySelector('#exer');
for(let i=1;i<15;i++){el=document.querySelector('#extb'+i);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','extb'+i);
bod.removeChild(el);bod.append(slct); }
for(let k=1;k<15;k++){for(let n=1;n<4;n++){bod=document.querySelector('#prop'+k+''+n);
 el=document.querySelector('#svpro'+k+''+n);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','svpro'+k+''+n);
bod.removeChild(el);bod.append(slct);  }} }

window.onload=function(){




 
let sndtab=[0];let rang=0;
 sndtab[0]=document.querySelector("#dsc1");sndtab[0].setAttribute("src","dsc1.mp3");
 for(let g=1;g<=4;g++){sndtab[g]=document.querySelector("#voix"+g);/*sndtab[g].setAttribute("src","voix"+g+".3gpp");*/ }
 for(let q=1;q<=14;q++){sndtab[4+q]=document.querySelector("#voiexo"+q);/*sndtab[4+q].setAttribute("src","voiexo"+q+".3gpp");*/ }
for(let g=0;g<14;g++){for(let q=1;q<=3;q++){sndtab[18+3*g+q]=document.querySelector("#voicor"+(g+1)+""+q);
 /*sndtab[18+3*g+q].setAttribute("src","voicor"+(g+1)+""+q+".3gpp");*/                                          }}
 let sndnum=[0];
 for(let g=0;g<=60;g++){sndnum[g]=0;}

let ob=0;
let larg=screen.availWidth;
let haut=screen.availHeight;
let navi=document.querySelector("#nv1");
let suj=document.querySelector("#tab");
let svcvr=document.querySelector("#svcouvr");
if(larg>800){navi.style.left=""+Math.round((larg-800)/2)+"px";}
if(larg<800){/*document.querySelector("#couvr").removeChild(svcvr);*/
 navi.style.left=""+30+"px";navi.style.right=""+30+"px";}
svcvr.style.height=""+haut+"px"; 
let CLI=document.querySelector("#clic");let ftsz;
if(larg>=800){CLI.style.fontSize="60px";ftsz=60;}
if(larg<800){CLI.style.fontSize="90px";ftsz=90;} 
 let flag=1;let yet=0;
let clc=document.createElementNS(ns,"text");
 clc.setAttribute("stroke","rgba(100%,100%,100%,1)");
 clc.setAttribute("id","clk");
 clc.textContent="cliquez svp";
 clc.setAttribute("font-size","90px");
 clc.setAttribute("x","100");
 clc.setAttribute("y","100");
 
CLI.style.left=""+Math.round((larg-CLI.offsetWidth)/2)+"px";
CLI.style.top=""+Math.round((haut-CLI.offsetHeight)/3)+"px";
let intv=setInterval(()=>{if(larg>=800){
 CLI.style.color="rgba(100%,10%,100%,1)";
  
 if(yet==0){svcvr.append(clc);yet=1;}
 clsvp=document.querySelector("#clk");
if(ftsz==60){flag=1;}if(ftsz==40){flag=0;}
if(ftsz>=40&&ftsz<60&&flag==0){ftsz++;CLI.style.fontSize=""+ftsz+"px";document.querySelector("#clk").setAttribute("font-size",""+ftsz+"px"); }
if (ftsz<=60&&ftsz>40&&flag==1){ftsz--;CLI.style.fontSize=""+ftsz+"px";document.querySelector("#clk").setAttribute("font-size",""+ftsz+"px");}
document.querySelector("#clk").setAttribute("x",""+Math.round((larg-CLI.offsetWidth)/2)+"px");
document.querySelector("#clk").setAttribute("y",""+Math.round((haut-CLI.offsetHeight)/2)+"px"); 
 
 /*(ftsz==60){flag=1;}if(ftsz==40){flag=0;}
if(ftsz>=40&&ftsz<60&&flag==0){ftsz++;CLI.style.fontSize=""+ftsz+"px";}
if (ftsz<=60&&ftsz>40&&flag==1){ftsz--;CLI.style.fontSize=""+ftsz+"px";}*/
CLI.style.left=""+Math.round((larg-CLI.offsetWidth)/2)+"px";}

if(larg<800){let clsvp;
 CLI.style.color="rgba(100%,100%,100%,1)";
  
 if(yet==0){svcvr.append(clc); yet=1;}
 clsvp=document.querySelector("#clk");
 if(ftsz==90){flag=1;}if(ftsz==60){flag=0;}
if(ftsz>=60&&ftsz<90&&flag==0){ftsz++;CLI.style.fontSize=""+ftsz+"px";document.querySelector("#clk").setAttribute("font-size",""+ftsz+"px"); }
if (ftsz<=90&&ftsz>60&&flag==1){ftsz--;CLI.style.fontSize=""+ftsz+"px";document.querySelector("#clk").setAttribute("font-size",""+ftsz+"px");}
document.querySelector("#clk").setAttribute("x",""+Math.round((larg-CLI.offsetWidth)/2)+"px");
document.querySelector("#clk").setAttribute("y",""+Math.round((haut-CLI.offsetHeight)/2)+"px"); 
 CLI.style.left=""+Math.round((haut-CLI.offsetWidth)/2)+"px";}
                          
                         },100);
let nxtph=document.querySelector("#nxtphs");
nxtph.style.left=""+0+"px";
document.querySelector("#couvr").addEventListener("click",()=>{let rtn=0;let dfl=0;clearInterval(intv);sndtab[0].play();sndnum[0]=1;
/*let scrl=setInterval(()=>{if(rtn==0){window.scrollBy(0,20);dfl=dfl+20;if(dfl==12000){rtn=1;}}
if(rtn==1){window.scrollBy(0,-20);dfl=dfl-20;if(dfl==0){rtn=0;}} },100);*/});

document.querySelector("#svcouvr").addEventListener("click",()=>{let rtn=0;let dfl=0;clearInterval(intv);sndtab[0].play();sndnum[0]=1;
});

 


document.querySelector("#e5").addEventListener('click',()=>{nxt=1;let fsd=5; 
sndtab[1].setAttribute('src','voix11.3gpp');sndtab[2].setAttribute('src','voix21.3gpp'); sndtab[5].setAttribute('src','voiexo11.3gpp'); 
sndtab[19].setAttribute('src','voicorr111.3gpp');sndtab[20].setAttribute('src','voicorr121.3gpp');sndtab[21].setAttribute('src','voicorr131.3gpp');

                                                            
 for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
  selection=1;cls();sndtab[1].addEventListener("ended",()=>{sndnum[1]=0;});
     document.querySelector("#titrex1").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[5].addEventListener("ended",()=>{sndnum[5]=0;});
 sndtab[5].play();sndnum[5]=1;});

document.querySelector("#prop11").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[19].addEventListener("ended",()=>{sndnum[19]=0;});
 sndtab[19].play();sndnum[19]=1;});

document.querySelector("#prop12").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[20].addEventListener("ended",()=>{sndnum[20]=0;});
 sndtab[20].play();sndnum[20]=1;});

document.querySelector("#prop13").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[21].addEventListener("ended",()=>{sndnum[21]=0;});
 sndtab[21].play();sndnum[21]=1;});   

 document.querySelector("#suite1").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[2].addEventListener("ended",()=>{sndnum[2]=0;});
 sndtab[2].play();sndnum[2]=1;});                                                            

/*document.querySelector("#suite2").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[3].addEventListener("ended",()=>{sndnum[3]=0;});
 sndtab[3].play();sndnum[3]=1;}); 

  document.querySelector("#suite1").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[2].addEventListener("ended",()=>{sndnum[2]=0;});
 sndtab[2].play();sndnum[2]=1;}); */


                                                            
                                                            
                                                            sndtab[1].addEventListener("ended",()=>{sndnum[1]=0;});
 sndtab[1].play();sndnum[1]=1;

                                                            

                                                            



});





document.querySelector("#e4").addEventListener('click',()=>{nxt=1;/* document.querySelector('#dsc2').setAttribute('src','des2.3gpp');
  document.querySelector('#dsc2').play();*/ 
 cls(); selection=2;






});



document.querySelector("#e3").addEventListener('click',()=>{nxt=1;/* document.querySelector('#dsc3').setAttribute('src','des3.3gpp');
  document.querySelector('#dsc3').play();*/ selection=3; cls();




});


document.querySelector("#e2").addEventListener('click',()=>{nxt=1; sndtab[1].setAttribute('src','voix41.3gpp'); sndtab[5].setAttribute('src','voiexo14.3gpp'); 
sndtab[19].setAttribute('src','voicorr114.3gpp');sndtab[20].setAttribute('src','voicorr124.3gpp');sndtab[21].setAttribute('src','voicorr134.3gpp');

                                                            
 for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   selection=4;cls();sndtab[1].addEventListener("ended",()=>{sndnum[1]=0;});
 sndtab[1].play();sndnum[1]=1;



document.querySelector("#titrex1").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[5].addEventListener("ended",()=>{sndnum[5]=0;});
 sndtab[5].play();sndnum[5]=1;});

document.querySelector("#prop11").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[19].addEventListener("ended",()=>{sndnum[19]=0;});
 sndtab[19].play();sndnum[19]=1;});

document.querySelector("#prop12").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[20].addEventListener("ended",()=>{sndnum[20]=0;});
 sndtab[20].play();sndnum[20]=1;});

document.querySelector("#prop13").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[21].addEventListener("ended",()=>{sndnum[21]=0;});
 sndtab[21].play();sndnum[21]=1;});   

 document.querySelector("#suite1").addEventListener("click",()=>{for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   sndtab[2].addEventListener("ended",()=>{sndnum[2]=0;});
 sndtab[2].play();sndnum[2]=1;});                       

                                                            





});






document.querySelector("#e1").addEventListener('click',()=>{nxt=1; /*document.querySelector('#dsc5').setAttribute('src','des5.3gpp');
  document.querySelector('#dsc5').play();*/ selection=5; cls();
                                                            



});


document.querySelector("#ter").addEventListener('click',()=>{nxt=1; /*document.querySelector('#dsc6').setAttribute('src','des6.3gpp');
  document.querySelector('#dsc6').play();*/ selection=6; cls();


    
                                                            });



document.querySelector("#bp1").addEventListener('click',()=>{nxt=1;/* document.querySelector('#dsc7').setAttribute('src','des7.3gpp');
  document.querySelector('#dsc7').play();*/ 
                                                             
        sndtab[1].setAttribute('src','voix71.3gpp'); sndtab[5].setAttribute('src','voiexo17.3gpp'); 
sndtab[19].setAttribute('src','voicorr117.3gpp');sndtab[20].setAttribute('src','voicorr127.3gpp');sndtab[21].setAttribute('src','voicorr137.3gpp');

                                                            
 for(let ply=0;ply<=60;ply++){if(sndnum[ply]==1){sndtab[ply].pause();}}
   selection=4;cls();sndtab[1].addEventListener("ended",()=>{sndnum[1]=0;});
 sndtab[1].play();sndnum[1]=1;                                                     
                                                             
                                                             
                                                             selection=7; cls();




});


document.querySelector("#nxtphs").addEventListener('click',()=>{nxt++; 
  bod=document.querySelector('#tabl'); 
 for(let i=1;i<5;i++){el=document.querySelector('#sv'+i);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','sv'+i);
bod.removeChild(el);bod.append(slct); } 

});





document.querySelector("#suitexo").addEventListener("click",()=>{nxtexo++;
bod=document.querySelector('#exer');
for(let i=1;i<15;i++){el=document.querySelector('#extb'+i);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','extb'+i);
bod.removeChild(el);bod.append(slct); }
for(let k=1;k<15;k++){for(let n=1;n<4;n++){bod=document.querySelector('#prop'+k+''+n);
 el=document.querySelector('#svpro'+k+''+n);slct=document.createElementNS(ns,'svg');
slct.setAttribute('id','svpro'+k+''+n);
bod.removeChild(el);bod.append(slct);  }} 

});



};







