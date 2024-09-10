function openModal(training) {
    var title = '';
    var description = '';
  
    if (training === 'diversidade') {
      title = 'Treinamento Completo: Conscientização sobre Diversidade';
      description = 'Este treinamento explora profundamente a diversidade nas empresas, incluindo melhores práticas para criar uma cultura inclusiva.';
      videoHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/tPy6lupKjqA?si=nWvLQXjgj_fuyrqv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    } else if (training === 'preconceito') {
      title = 'Treinamento Completo: Combate ao Preconceito Inconsciente';
      description = 'Este treinamento ensina como reconhecer e combater o preconceito inconsciente, promovendo um ambiente corporativo justo.';
        videoHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/IE01HiODNW0?si=tLiuKVX14_ZbWfMh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-video').innerHTML = videoHtml;
    document.getElementById('myModal').style.display = 'flex';
  }
  
  function showSubtrainingModal() {
    var dropdown = document.getElementById('subtrainingDropdown');
    var selectedValue = dropdown.value;
    var title = '';
    var description = '';
  
    if (selectedValue === 'deficiencia_fisica') {
      title = 'Deficiência Física: Adaptação no Ambiente de Trabalho';
      description = 'Discussão sobre as adaptações necessárias para incluir pessoas com deficiência física.';
      videoHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/tu667UDmapA?si=_ieDD6MCUOX8sDaF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    } else if (selectedValue === 'deficiencia_visual') {
      title = 'Deficiência Visual: Ferramentas de Inclusão';
      description = 'Ferramentas que ajudam pessoas com deficiência visual a se integrarem no ambiente de trabalho.';
      videoHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/lckmfCIqwJ8?si=2gOQRE9W6LD4IYuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    } else if (selectedValue === 'deficiencia_auditiva') {
      title = 'Deficiência Auditiva: Comunicação Acessível';
      description = 'Técnicas para garantir que a comunicação seja acessível a pessoas com deficiência auditiva.';
      videoHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/LH40sPmrD64?si=9OFa0SejQjjwonyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    } else if (selectedValue === 'deficiencia_intelectual') {
      title = 'Deficiência Intelectual: Suporte e Desenvolvimento';
      description = 'Como criar um ambiente de trabalho que apoie o desenvolvimento de funcionários com deficiência intelectual.';
      videoHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/4MPt5udDCvU?si=Rc_rtX48_yPjsanc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  
    if (selectedValue) {
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-description').textContent = description;
      document.getElementById('modal-video').innerHTML = videoHtml;
      document.getElementById('myModal').style.display = 'flex';
    }
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  