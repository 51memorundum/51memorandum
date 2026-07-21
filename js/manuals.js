// ============================================
// 51DKB Ver.3
// manuals.js
// カテゴリー別・3列表示
// ============================================

function loadManuals() {

    fetch("data/manuals.json")
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();

        })
        .then(data => {

            const categories = [
                {
                    id: "software",
                    title: "💻 ソフト"
                },
                {
                    id: "board",
                    title: "🔧 基板"
                },
                {
                    id: "laser",
                    title: "⚡ 発振器"
                }
            ];

            let html = "<h2>📖 マニュアル一覧</h2>";

            categories.forEach(category => {

                const items = data.filter(item =>
                    item.category === category.id
                );

                if (items.length === 0) {
                    return;
                }

                html += `
                    <section class="manual-section">

                        <h3 class="manual-category-title">
                            ${category.title}
                        </h3>

                        <div class="manual-grid">
                `;

                items.forEach(item => {

                    html += `
                        <article class="manual-card">

                            <h3>${item.title}</h3>

                            <p>
                                メーカー：${item.manufacturer}
                            </p>

                            <div class="manual-actions">

                                <a
class="manual-button pdf-button"
href="${item.pdf_eng}"
target="_blank">

📄 PDF（ENG）

</a>

<a
class="manual-button pdf-button"
href="${item.pdf_jpn}"
target="_blank">

📄 PDF（JPN）

</a>

                                <a
                                    class="manual-button html-button"
                                    href="${item.manual}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🌐 自作マニュアル
                                </a>

                            </div>

                        </article>
                    `;

                });

                html += `
                        </div>
                    </section>
                `;

            });

            document.getElementById("content").innerHTML = html;

        })
        .catch(error => {

            console.error("マニュアル読み込みエラー:", error);

            document.getElementById("content").innerHTML = `
                <h2>マニュアルを読み込めませんでした。</h2>
            `;

        });

}