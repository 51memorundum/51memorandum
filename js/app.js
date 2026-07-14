// ============================================
// 51memorandum
// app.js
// Ver 1.0
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // メニュー
    // -----------------------------

    const menuButtons = document.querySelectorAll(".menuButton");
    const content = document.querySelector(".content");

    const pages = {

        "📖 マニュアル": {
            title: "マニュアル",
            text: "メーカー別のマニュアルを管理します。"
        },

        "📝 作業手順": {
            title: "作業手順",
            text: "写真付きの作業手順を管理します。"
        },

        "🛠 治具": {
            title: "治具",
            text: "治具・DXF・STL・Fusion360データを管理します。"
        },

        "🧪 テスト加工": {
            title: "テスト加工",
            text: "加工条件・写真・評価を管理します。"
        },

        "⭐ お気に入り": {
            title: "お気に入り",
            text: "お気に入りに登録した資料を表示します。"
        },

        "🆕 更新履歴": {
            title: "更新履歴",
            text: "最近追加・更新した情報を表示します。"
        },

        "⚙ 設定": {
            title: "設定",
            text: "今後追加予定です。"
        }

    };

    menuButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const key = button.textContent.trim();

            if (!pages[key]) return;

// マニュアルがクリックされたら一覧を表示
if (key === "📖 マニュアル") {
    loadManuals();
    return;
}

content.innerHTML = `

    <h2>${pages[key].title}</h2>

    <div class="card">

        <p>${pages[key].text}</p>

    </div>

    <div class="card">

        <h3>準備中</h3>

        <p>

        このページは今後データベースから自動表示されます。

        </p>

    </div>

`;

            
        });

    });


    // -----------------------------
    // 検索
    // -----------------------------

    const searchBox = document.getElementById("searchBox");

    if (searchBox) {

        searchBox.addEventListener("keyup", function () {

            const keyword = searchBox.value.toLowerCase();

            menuButtons.forEach(function (button) {

                const text = button.textContent.toLowerCase();

                if (text.indexOf(keyword) !== -1) {

                    button.style.display = "block";

                } else {

                    button.style.display = "none";

                }

            });

        });

    }

});
