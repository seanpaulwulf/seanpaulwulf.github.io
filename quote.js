document.querySelectorAll('form.quote').forEach(function(f){
  f.addEventListener('submit',function(ev){
    ev.preventDefault();
    if(!f.reportValidity()) return;
    var d=new FormData(f), car=f.dataset.car;
    var msg='Quote request: '+car+'\nPickup: '+d.get('pickup')+'\nReturn: '+d.get('return')+'\nName: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nEmail: '+d.get('email')+'\n21+ with US license: yes';
    var phone=/iPhone|iPad|Android/i.test(navigator.userAgent);
    var url=phone?'sms:+18886816246'+(/iPhone|iPad/i.test(navigator.userAgent)?'&':'?')+'body='+encodeURIComponent(msg)
                 :'mailto:midnightautoexotics@gmail.com?subject='+encodeURIComponent('Quote request: '+car)+'&body='+encodeURIComponent(msg);
    location.href=url;
    var ok=f.querySelector('.ok'); if(ok) ok.hidden=false;
  });
});
