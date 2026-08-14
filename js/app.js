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

                

               case "🏭 JCZ関連":
    content.innerHTML = `
        <h2>🏭 JCZ関連</h2>

        <p>JCZ関連の技術情報・設定方法をまとめます。</p>

        <div class="jcz-item">

            <a
                class="jcz-title"
                href="html/multiheadfunction.html"
            >
                マルチヘッドファンクション Multi-ead Function 
            </a><br>
 (例 クローム)<br> 
            <p>
                1台のPCで複数のレーザーを操作する。<br>
                このファンクションはEZCAD3が必須。<br>
                また、基板もDLCカードが必要になる。
            </p>

        </div>

        <div class="jcz-item">

            <a
                class="jcz-title"
                href="jcz/autoz.html"
            >
                AutoZでのZ調整加工
            </a><br>
           
                AutoZを使用してZ軸の高さを自動調整しながら加工する方法。
            

        </div>
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

                case "🧪 テスト加工（動画）":
                    loadTests();
                    break;

                case "⭐ youtube Link":
                    loadVideos();
                    break;

               case "🆕 更新履歴":
    loadUpdates();
    break;
                    

               case "⚙ 設定・調整":
    content.innerHTML = `
        <h2>⚙ 設定・調整</h2>

        <h3>Ezcad2のField設定</h3>

       
            <a
                href="pdf/ezd/lenscalibraion.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                レンズのカリブレーション方法
            </a>
        <h3>ダウンロード</h3>
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