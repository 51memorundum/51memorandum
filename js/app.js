// ============================================
// 51DKB Ver.3
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

                case "🛠 治具データ":
                    content.innerHTML = `
                        <h2>🛠 治具データ</h2>
                        <p>ここに治具データを表示します。</p>
                    `;
                    break;

                case "🧪 テスト加工":
                    loadTests();
                    break;

                case "⭐ youtube Link":
                    loadVideos();
                    break;

                case "🆕 更新履歴":
                    content.innerHTML = `
                        <h2>🆕 更新履歴</h2>
                        <p>ここに更新履歴を表示します。</p>
                    `;
                    break;

                case "⚙ 設定":
                    content.innerHTML = `
                        <h2>⚙ 設定</h2>
                        <p>設定画面は準備中です。</p>
                    `;
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