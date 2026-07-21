// ============================================
// 51DKB Ver.3.1
// manuals.js
// カテゴリー別・3列表示
// PDFボタン自動生成
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

                    let actionButtons = "";

                    // PDFの数に合わせてボタンを自動生成
                    if (Array.isArray(item.pdfs)) {

                        item.pdfs.forEach(pdf => {

                            // titleまたはfileが空の場合は表示しない
                            if (!pdf.title || !pdf.file) {
                                return;
                            }

                            actionButtons += `
                                <a
                                    class="manual-button pdf-button"
                                    href="${pdf.file}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 ${pdf.title}
                                </a>
                            `;

                        });

                    }

                    // 自作マニュアルが登録されている場合だけ表示
                    if (item.manual) {

                        actionButtons += `
                            <a
                                class="manual-button html-button"
                                href="${item.manual}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                🌐 自作マニュアル
                            </a>
                        `;

                    }

                    html += `
                        <article class="manual-card">

                            <h3>${item.title}</h3>

                            <p>
                                メーカー：${item.manufacturer}
                            </p>

                            <div class="manual-actions">
                                ${actionButtons}
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
                <p>manuals.jsonの内容を確認してください。</p>
            `;

        });

}