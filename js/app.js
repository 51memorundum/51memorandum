// ============================================
// 51DKB Ver.2
// app.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const content = document.getElementById("content");

    document.querySelectorAll(".menuButton").forEach(button => {

        button.addEventListener("click", () => {

            const menu = button.textContent.trim();

            switch (menu) {

                case "📖 マニュアル":
                    loadManuals();
                    break;
case "🏭 JCZ":
    content.innerHTML = `
        <h2>🏭 JCZ</h2>
        <p>JCZ関連資料を表示します。</p>
    `;
    break;

case "⚡ RAYFINE":
    content.innerHTML = `
        <h2>⚡ RAYFINE</h2>
        <p>RAYFINE関連資料を表示します。</p>
    `;
    break;
                case "📝 作業手順":
                    content.innerHTML = `
                        <h2>📝 作業手順</h2>
                        <p>ここに作業手順を表示します。</p>
                    `;
                    break;

                case "🛠 治具":
                    content.innerHTML = `
                        <h2>🛠 治具</h2>
                        <p>ここに治具データを表示します。</p>
                    `;
                    break;

                case "🧪 テスト加工":
    loadTests();
    break;

                default:
                    content.innerHTML = `
                        <h2>51DKB</h2>
                        <p>左側のメニューを選択してください。</p>
                    `;
            }

        });

    });

});