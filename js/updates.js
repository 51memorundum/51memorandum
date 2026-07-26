// ============================================
// 51DKB Ver.4
// updates.js
// 更新履歴一覧
// ============================================

function loadUpdates() {

    fetch("data/updates.json")
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();

        })
        .then(data => {

            const sortedData = [...data].sort((a, b) =>
                new Date(b.date) - new Date(a.date)
            );

            let html = `
                <h2>🆕 更新履歴</h2>

                <div class="update-list">
            `;

            if (sortedData.length === 0) {

                html += `
                    <div class="update-empty">
                        更新履歴はまだありません。
                    </div>
                `;

            } else {

                sortedData.forEach(item => {

                    html += `
                        <article class="update-card">

                            <div class="update-header">

                                <time datetime="${item.date}">
                                    ${formatUpdateDate(item.date)}
                                </time>

                                <span class="update-category">
                                    ${item.category || "更新"}
                                </span>

                            </div>

                            <h3>${item.title}</h3>

                            <p>
                                ${item.description || ""}
                            </p>

                        </article>
                    `;

                });

            }

            html += "</div>";

            document.getElementById("content").innerHTML = html;

        })
        .catch(error => {

            console.error("更新履歴読み込みエラー:", error);

            document.getElementById("content").innerHTML = `
                <h2>更新履歴を読み込めませんでした。</h2>
                <p>${error.message}</p>
            `;

        });

}

function formatUpdateDate(dateString) {

    const parts = dateString.split("-");

    if (parts.length !== 3) {
        return dateString;
    }

    return `${parts[0]}年${Number(parts[1])}月${Number(parts[2])}日`;

}