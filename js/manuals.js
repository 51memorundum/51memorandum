function loadManuals() {

    fetch("data/manuals.json")
        .then(response => response.json())
        .then(data => {

            let html = "<h2>📖 マニュアル一覧</h2>";

            data.forEach(item => {

                html += `
                    <div class="manual-card">
                        <h3>${item.title}</h3>
                        <p>メーカー：${item.manufacturer}</p>
                        <p>カテゴリ：${item.category}</p>
                    </div>
                `;

            });

            document.getElementById("content").innerHTML = html;

        })
        .catch(error => {

            document.getElementById("content").innerHTML =
                "<h2>JSONの読み込みに失敗しました。</h2>";

            console.error(error);

        });

}
  .then(data => {

    let html = "<h2>📖 マニュアル一覧</h2>";

    data.forEach(item => {

      html += `
        <div class="manual-card">
          <h3>${item.title}</h3>
          <p>メーカー：${item.manufacturer}</p>
          <p>カテゴリ：${item.category}</p>
        </div>
      `;

    });

    document.getElementById("content").innerHTML = html;

  })
  .catch(error => {

    document.getElementById("content").innerHTML =
      "<h2>JSONの読み込みに失敗しました。</h2>";

    console.error(error);

  });
