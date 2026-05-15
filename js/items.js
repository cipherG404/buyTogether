let itemWrapper = document.getElementById('itemWrapper');

// 串接後端api（json格式）
fetch("https://raw.githubusercontent.com/Stille-W/git-20220529/main/items.json")
  .then(function(response) {
    // console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    let products = myJson.products;
    
    // 建立產品卡片（products[i]）
    for(let i=0;i<products.length;i++){
      let templateCard = document.querySelector('#cardTemplate');
      let template_clone = templateCard.content.cloneNode(true);

      let hotTagEl = template_clone.getElementById('hot');
      let titleEl = template_clone.getElementById('itemTitle');
      let subTitleEl = template_clone.getElementById('itemSubTitle');
      let priceEl = template_clone.getElementById('price');
      let thumbnailEl = template_clone.getElementById('thumbnail');
      let urlEl = template_clone.getElementById('url');

      titleEl.textContent = products[i].name;
      subTitleEl.textContent = products[i].brand; 
      priceEl.textContent = "$"+products[i].price;
      thumbnailEl.src = products[i].thumbnail;
      urlEl.href = products[i].url;

      if (products[i].isHot) {
        hotTagEl.classList.add('active'); 
      }

      itemWrapper.appendChild(template_clone);
    }
  }).catch((err) => {
    console.log(err);
  })