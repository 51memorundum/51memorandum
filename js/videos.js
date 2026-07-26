// ============================================
// 51DKB Ver.4
// videos.js
// videos.jsonから動画一覧を表示
// ============================================

function loadVideos() {

    fetch("data/videos.json")
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP Error : ${response.status}`);
            }

            return response.json();

        })

        .then(data => {

            const categories = [...new Set(data.map(item => item.category))];

            let html = `
                <h2>🎥 役立つ動画リンク集</h2>
            `;

            categories.forEach(category => {

                html += `
                    <section class="video-category">

                        <h3>${category}</h3>

                        <div class="video-list">
                `;

                data
                    .filter(item => item.category === category)
                    .forEach(item => {

                        html += `

                            <a
                                class="video-page-link"
                                href="${item.movie}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ▶ ${item.title}
                            </a>

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

            console.error(error);

            document.getElementById("content").innerHTML = `

                <h2>動画一覧を読み込めませんでした。</h2>

                <p>${error.message}</p>

            `;

        });

}