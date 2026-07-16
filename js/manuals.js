// ============================================
// 51DKB Ver.2
// manuals.js
// ============================================

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
                        <button onclick="window.open('${item.pdf}','_blank')">
                            PDFを開く
                        </button>
                    </div>
                `;

            });

            document.getElementById("content").innerHTML = html;

        })
        .catch(error => {

            console.error(error);

            document.getElementById("content").innerHTML =
                "<h2>マニュアルを読み込めませんでした。</h2>";

        });

}