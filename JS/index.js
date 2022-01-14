function over(e){
    document.querySelector('.appota').style.display = 'none';
    document.querySelector('.pen__text').style.display = 'block';
  }
  function leave(){
    document.querySelector('.appota').style.display = 'block';
    document.querySelector('.pen__text').style.display = 'none';
  }
  document.querySelector('.left__box-s').addEventListener('mouseover',function(e){
    document.querySelector('.chainverse').style.display = 'none';
  })
  document.querySelector('.left__box-s').addEventListener('mouseout',function(e){
    document.querySelector('.chainverse').style.display = 'block';
  })
  function overleft(){
    document.querySelector('.acestarter').style.display = 'none';
  }
  function outleft(){
    document.querySelector('.acestarter').style.display = 'block';
  }
  // Xử lý phần partner

  document.querySelector('.top-one').addEventListener('click',function(e){
    document.querySelector('.top-one').style.display = 'none';
    document.querySelector('.pat-one').style.display='block';
    document.querySelector('.pat-2').style.display='none';
    document.querySelector('.pat-3').style.display='none';
    document.querySelector('.top-second').style.display = 'block';
    document.querySelector('.top-third').style.display = 'block';


  })
  document.querySelector('.pat-one').addEventListener('click',function(e){
      document.querySelector('.pat-one').style.display='none';
      document.querySelector('.top-one').style.display='block';
  })

  document.querySelector('.top-second').addEventListener('click',function(e){
    document.querySelector('.top-second').style.display = 'none';
    document.querySelector('.pat-2').style.display='block';
    document.querySelector('.pat-one').style.display='none';
    document.querySelector('.top-one').style.display = 'block';
    document.querySelector('.top-third').style.display = 'block';
    document.querySelector('.pat-3').style.display='none';
  })
  document.querySelector('.pat-2').addEventListener('click',function(e){
      document.querySelector('.pat-2').style.display='none';
    document.querySelector('.top-second').style.display = 'block';
    // document.querySelector('.pat-3').style.display='none';
  })
  
  document.querySelector('.top-third').addEventListener('click',function(e){
      document.querySelector('.top-third').style.display='none';
      document.querySelector('.pat-3').style.display='block';
      document.querySelector('.pat-2').style.display='none';
        document.querySelector('.pat-one').style.display='none';
        document.querySelector('.top-one').style.display='block';
      document.querySelector('.top-second').style.display='block';
  })

  document.querySelector('.pat-3').addEventListener('click',function(e){
      document.querySelector('.pat-3').style.display='none';
      document.querySelector('.top-third').style.display = 'block';

  })