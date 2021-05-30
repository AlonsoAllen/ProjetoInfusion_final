
    let progress = document.getElementById('progressbar');
    let totalHeigth = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
      let progressHeight = (window.pageYOffset / totalHeigth) * 130; /*precisei aumentar o valor para a barra ir até o final do site.
      Deveria ser 100 e virou 130, para a barra ir até o final do site, pois ele pega a referencia do body e o site possui um footer separado. */
      progress.style.height = progressHeight + "%";
    }