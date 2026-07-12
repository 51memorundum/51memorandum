// manuals.json を読み込む

fetch("data/manuals.json")
    .then(response => response.json())
    .then(data => {

        console.log("マニュアル一覧");

        console.log(data);

    })
    .catch(error => {

        console.error("JSON読み込み失敗", error);

    });
