// ============================================
// 51DKB Ver.3
// tests.js
// テスト加工・カテゴリー別カード表示
// ============================================

let allTestData = [];

function loadTests() {

    fetch("data/tests.json")
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();

        })
        .then(data => {

            allTestData = data;
            renderTests("all");

        })
        .catch(error => {

            console.error("テスト加工読み込みエラー:", error);

            document.getElementById("content").innerHTML = `
                <h2>テスト加工を読み込めませんでした。</h2>
                <p>tests.jsonの内容を確認してください。</p>
            `;

        });

}


function renderTests(selectedCategory) {

    const categories = [
        {
            id: "all",
            title: "すべて"
        },
        {
            id: "resin",
            title: "樹脂"
        },
        {
            id: "metal",
            title: "金属"
        },
        {
            id: "wood",
            title: "木材"
        },
        {
            id: "glass",
            title: "ガラス"
        },
        {
            id: "other",
            title: "その他"
        }
    ];

    const filteredData = selectedCategory === "all"
        ? allTestData
        : allTestData.filter(item =>
            item.category === selectedCategory
        );

    let html = `
        <h2>🧪 テスト加工</h2>

        <div class="test-category-buttons">
    `;

    categories.forEach(category => {

        const activeClass =
            selectedCategory === category.id
                ? "active"
                : "";

        html += `
            <button
                class="test-category-button ${activeClass}"
                data-category="${category.id}"
            >
                ${category.title}
            </button>
        `;

    });

    html += `
        </div>

        <div class="test-grid">
    `;

    if (filteredData.length === 0) {

        html += `
            <div class="test-empty">
                このカテゴリーには、まだデータがありません。
            </div>
        `;

    } else {

        filteredData.forEach(item => {

            let youtubeButton = "";

            if (item.youtube) {

                youtubeButton = `
                    <a
                        class="test-button youtube-button"
                        href="${item.youtube}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▶ YouTubeを見る
                    </a>
                `;

            }

            html += `
                <article class="test-card">

                    <h3>${item.title}</h3>

                    <dl class="test-details">

                        <div>
                            <dt>レーザー</dt>
                            <dd>${item.laser || "-"}</dd>
                        </div>

                        <div>
                            <dt>素材</dt>
                            <dd>${item.material || "-"}</dd>
                        </div>

                        <div>
                            <dt>加工内容</dt>
                            <dd>${item.process || "-"}</dd>
                        </div>

                        <div>
    <dt>加工データ</dt>
    <dd>
        ${
            item.data_file
                ? `
                    <a
                        class="test-data-link"
                        href="${item.data_file}"
                        download
                    >
                        📥 ${item.data_name || "加工データをダウンロード"}
                    </a>
                `
                : item.data_name || "-"
        }
    </dd>
</div>

                    </dl>

                    ${
                        item.comment
                            ? `<p class="test-comment">${item.comment}</p>`
                            : ""
                    }

                    <div class="test-actions">
                        ${youtubeButton}
                    </div>

                </article>
            `;

        });

    }

    html += "</div>";

    document.getElementById("content").innerHTML = html;

    document
        .querySelectorAll(".test-category-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const category =
                    button.dataset.category;

                renderTests(category);

            });

        });

}