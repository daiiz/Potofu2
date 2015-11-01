window.onload = function () {
    potofu2.setTitle(
        "Potofu2",
        "Potofu2",
        "ポートフォリオ作成ツール"
    );

    var hoge = potofu2.makeList('サンプル', 'table', [
        1, 2
    ]);

    potofu2.pour([
        hoge
    ]);

    potofu2.flush();
}

window.resize = function () {
}
