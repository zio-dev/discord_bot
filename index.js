const Discord = require("discord.js");
const client = new Discord.Client();
const token = ""; // TOKEN情報を入れること

const all_weapon = [
  ".52ガロン",
  ".52ガロンデコ",
  ".96ガロン",
  ".96ガロンデコ",
  "プロモデラーMG",
  "プロモデラーPG",
  "プロモデラーRG",
  "ジェットスイーパーカスタム",
  "もみじシューター",
  "ボトルガイザーフォイル",
  "プライムシューターコラボ",
  "ヒーローシューター レプリカ",
  "ジェットスイーパー",
  ".52ガロンベッチュー",
  "スプラシューターベッチュー",
  "おちばシューター",
  "プライムシューターベッチュー",
  "シャープマーカーネオ",
  "ボールドマーカーネオ",
  "N-ZAP83(ファミ)",
  "N-ZAP85(黒)",
  "N-ZAP89(赤)",
  "オクタシューター レプリカ",
  "シャープマーカー",
  "スプラシューター",
  "わかばシューター",
  "プライムシューター",
  "ボールドマーカー",
  "ボールドマーカー7",
  "ボトルガイザー",
  "スプラシューターコラボ",
  "ホットブラスター",
  "クラッシュブラスター",
  "クラッシュブラスターネオ",
  "ホットブラスターカスタム",
  "ロングブラスターカスタム",
  "ロングブラスターネクロ",
  "ヒーローブラスター レプリカ",
  "ノヴァブラスターベッチュー",
  "ラピッドブラスターベッチュー",
  "ノヴァブラスター",
  "ノヴァブラスターネオ",
  "ロングブラスター",
  "ラピッドブラスター",
  "ラピッドブラスターデコ",
  "Rブラスターエリート",
  "Rブラスターエリートデコ",
  "スパッタリークリア",
  "デュアルスイーパーカスタム",
  "スパッタリー",
  "スパッタリー・ヒュー",
  "クアッドホッパーブラック",
  "デュアルスイーパー",
  "スプラマニューバーコラボ",
  "ケルビン525",
  "ケルビン525デコ",
  "ヒーローマニューバー レプリカ",
  "ケルビン525ベッチュー",
  "スプラマニューバーベッチュー",
  "クアッドホッパーホワイト",
  "スプラマニューバー",
  "H3リールガンチェリー",
  "H3リールガン",
  "H3リールガンD",
  "L3リールガンベッチュー",
  "L3リールガン",
  "L3リールガンD",
  "カーボンローラー",
  "カーボンローラーデコ",
  "ダイナモローラー",
  "ヴァリアブルローラー",
  "ヴァリアブルローラーフォイル",
  "ダイナモローラーテスラ",
  "ヒーローローラー レプリカ",
  "ダイナモローラーベッチュー",
  "スプラローラーベッチュー",
  "スプラローラーコラボ",
  "スプラローラー",
  "ヒーローブラシ レプリカ",
  "パブロ",
  "パブロ・ヒュー",
  "ホクサイベッチュー",
  "ホクサイ",
  "ホクサイ・ヒュー",
  "パーマネント・パブロ",
  "14式竹筒銃・甲",
  "14式竹筒銃・乙",
  "14式竹筒銃・丙",
  "スクイックリンα",
  "リッター4Kカスタム",
  "4Kスコープカスタム",
  "ソイチューバーカスタム",
  "リッター4K",
  "4Kスコープ",
  "スプラチャージャーコラボ",
  "スプラスコープコラボ",
  "スクイックリンγ",
  "ソイチューバー",
  "ヒーローチャージャー レプリカ",
  "スプラチャージャーベッチュー",
  "スプラスコープベッチュー",
  "スクイックリンβ",
  "スプラチャージャー",
  "スプラスコープ",
  "オーバーフロッシャー",
  "オーバーフロッシャーデコ",
  "エクスプロッシャーカスタム",
  "エクスプロッシャー",
  "ヒーロースロッシャー レプリカ",
  "スクリュースロッシャーベッチュー",
  "バケットスロッシャー",
  "バケットスロッシャーデコ",
  "スクリュースロッシャー",
  "スクリュースロッシャーネオ",
  "バケットスロッシャーソーダ",
  "ヒッセン",
  "ヒッセン・ヒュー",
  "クーゲルシュライバー",
  "クーゲルシュライバー・ヒュー",
  "ハイドラントカスタム",
  "バレルスピナー",
  "バレルスピナーデコ",
  "バレルスピナーリミックス",
  "ヒーロースピナー レプリカ",
  "ハイドラント",
  "スプラスピナーベッチュー",
  "スプラスピナー",
  "ノーチラス47",
  "ノーチラス79",
  "スプラスピナーコラボ",
  "ヒーローシェルター レプリカ",
  "スパイガジェットベッチュー",
  "パラシェルターソレーラ",
  "パラシェルター",
  "キャンピングシェルター",
  "キャンピングシェルターカーモ",
  "キャンピングシェルターソレーラ",
  "スパイガジェット",
  "スパイガジェットソレーラ",
];
const all_special = [
  "ジェットパック",
  "アメフラシ",
  "スーパーチャクチ",
  "ハイパープレッサー",
  "バブルランチャー",
  "ナイスダマ",
  "インクアーマー",
  "イカスフィア",
  "ボムピッチャー",
  "マルチミサイル",
  "ウルトラハンコ",
];
const all_sub_weapon = [
  "スプラッシュボム",
  "ポイズンミスト",
  "キューバンボム",
  "カーリングボム",
  "ポイントセンサー",
  "ジャンプビーコン",
  "クイックボム",
  "ロボットボム",
  "スプラッシュシールド",
  "スプリンクラー",
  "タンサンボム",
  "トーピード",
  "トラップ",
];
const all_weapon_type = [
  ":gun: シューターっぽいもの（マニューバ,ガロン,リールガン含む）",
  "シューター（マニューバ,リールガン除く）",
  "ブラスター",
  "カサ",
  "スピナー",
  ":broom: フデ",
  ":bamboo:",
  "チャージャー",
  ":man_cartwheeling: まにゅーば",
  "リールガン",
  ":partying_face: ローラー",
  ":bucket: スロッシャー",
];

client.on("ready", () => {
  console.log(`${client.user.username} 起動中`);
});

client.on("message", async (msg) => {
  if (msg.author.bot) {
    return;
  }

  let rule_all_hydra = function (msg) {
    msg.channel.send(
      "兄より優れた弟など存在しない！ハイドラントカスタムは駆逐せよ！" +
        "\n" +
        "(ハイドラントカスタムは禁止)" +
        "\n" +
        "\n" +
        "★★★アルファチーム★★★" +
        "\n" +
        "プレイヤー1 : ハイドラント" +
        "\n" +
        "プレイヤー2 : ハイドラント" +
        "\n" +
        "プレイヤー3 : ハイドラント" +
        "\n" +
        "プレイヤー4 : ハイドラント" +
        "\n" +
        "\n" +
        "★★★ブラボーチーム★★★" +
        "\n" +
        "プレイヤー1 : ハイドラント" +
        "\n" +
        "プレイヤー2 : ハイドラント" +
        "\n" +
        "プレイヤー3 : ハイドラント" +
        "\n" +
        "プレイヤー4 : ハイドラント"
    );
  };

  let rule_all_specify = function (msg) {
    msg.channel
      .send(
        "■■■全員武器指定ルール■■■" +
          "\n" +
          "(武器を持ってない人はパブロヒュー固定！！！)" +
          "\n" +
          "\n" +
          "★★★アルファチーム★★★" +
          "\n" +
          "プレイヤー1 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)] +
          "\n" +
          "プレイヤー2 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)] +
          "\n" +
          "プレイヤー3 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)] +
          "\n" +
          "プレイヤー4 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)] +
          "\n" +
          "\n" +
          "★★★ブラボーチーム★★★" +
          "\n" +
          "プレイヤー1 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)] +
          "\n" +
          "プレイヤー2 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)] +
          "\n" +
          "プレイヤー3 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)] +
          "\n" +
          "プレイヤー4 : " +
          all_weapon[Math.floor(Math.random() * all_weapon.length)]
      )
      .then((msg) => console.log(`Sent message: ${msg.content}`))
      .catch(console.error);
  };

  let rule_special = function (msg) {
    msg.channel
      .send(
        ":rooster: 縛りルール :rooster:" +
          "\n" +
          "全員" +
          all_special[Math.floor(Math.random() * all_special.length)] +
          "縛りで！！！"
      )
      .then((msg) => console.log(`Sent message: ${msg.content}`))
      .catch(console.error);
  };

  let rule_weapon_type = function (msg) {
    msg.channel.send(
      ":mouse2: 縛りルール :mouse2:" +
        "\n" +
        "全員" +
        all_weapon_type[Math.floor(Math.random() * all_weapon_type.length)] +
        "縛りで！！！"
    );
  };

  let rule_sub_weapon = function (msg) {
    msg.channel.send(
      ":whale: 縛りルール :whale:" +
        "\n" +
        "全員" +
        all_sub_weapon[Math.floor(Math.random() * all_sub_weapon.length)] +
        "縛りで！！！"
    );
  };

  let rule_mix = function (msg) {
    let no = Math.ceil(Math.random() * 100);
    msg.channel.send(
      ":cloud_lightning: 縛りルール :cloud_lightning:" +
        "\n全員" +
        all_special[Math.floor(Math.random() * all_special.length)] +
        "縛りで！" +
        "\n全員" +
        all_weapon_type[Math.floor(Math.random() * all_weapon_type.length)] +
        "縛りで！！！" +
        "\n無かったらゴメン！（全員パプロヒューで！）"
    );
  };

  let rule_mix_old = function (msg) {
    let no = Math.ceil(Math.random() * 100);
    msg.channel.send(
      ":cloud_lightning: 縛りルール :cloud_lightning:" +
        "\n全員" +
        all_special[Math.floor(Math.random() * all_special.length)] +
        "縛りで！" +
        "\n全員" +
        all_sub_weapon[Math.floor(Math.random() * all_sub_weapon.length)] +
        "縛りで！！" +
        "\n全員" +
        all_weapon_type[Math.floor(Math.random() * all_weapon_type.length)] +
        "縛りで！！！" +
        "\n無かったらゴメン！（全員好きな武器で！）"
    );
  };

  let rule_ban_weapon_type = function (msg) {
    let no = Math.ceil(Math.random() * 100);
    msg.channel.send(
      ":cop: BANルール :cop:" +
        "\n" +
        all_weapon_type[Math.floor(Math.random() * all_weapon_type.length)] +
        "," +
        all_weapon_type[Math.floor(Math.random() * all_weapon_type.length)] +
        "は禁止！！"
    );
  };

  let rule_only_one_weapon = function (msg) {
    msg.channel.send(
      ":lock: 縛りルール :lock:" +
        "\n全員" +
        all_weapon[Math.floor(Math.random() * all_weapon.length)] +
        "縛りで！"
    );
  };

  let rule_daikon = function (msg) {
    msg.channel.send(
      ":sushi: THE 大根絞り :sushi:" +
        "\n" +
        "一番最終ページの最後にある一番使われていない武器で！！！"
    );
  };

  let rule_no_custom = function (msg) {
    msg.channel.send(
      ":cloud_lightning: 縛りルール :cloud_lightning:" +
        "\n" +
        "って思ったけどやっぱ無しで！"
    );
  };

  // sample
  if (msg.content === "ハイドラ最高" || msg.content === "山田ガチャ") {
    rule_all_hydra(msg);
    return;
  }
  if (msg.content === "全武器指定") {
    rule_all_specify(msg);
    return;
  }
  if (msg.content === "スペシャルガチャ") {
    rule_special(msg);
    return;
  }
  if (msg.content === "メインガチャ") {
    rule_weapon_type(msg);
    return;
  }
  if (msg.content === "サブガチャ") {
    rule_sub_weapon(msg);
    return;
  }
  if (msg.content != "ルールガチャ" && msg.content.endsWith("ガチャ")) {
    let name = msg.content.replace("ガチャ", "");
    msg.channel.send(
      name +
        "さんだけ" +
        all_weapon[Math.floor(Math.random() * all_weapon.length)] +
        "縛りで！！！"
    );
    return;
  }
  let ratio_special = 30;
  let ratio_weapon_type = 30;
  let ratio_sub_weapon = 30;
  let ratio_mix = 30;
  let ratio_all_specify = 10;
  let ratio_ban_weapon_type = 0;
  let ratio_no_custom = 160;
  let ratio_all_hydra = 5;
  let ratio_only_one_weapon = 20;
  let ratio_daikon = 10;

  let ratio_max =
    ratio_special +
    ratio_weapon_type +
    ratio_sub_weapon +
    ratio_mix +
    ratio_all_specify +
    ratio_ban_weapon_type +
    ratio_no_custom +
    ratio_all_hydra;

  let ratio_base = 0;
  let ratio_target = 0;

  if (msg.content === "ルールガチャ") {
    let no = Math.ceil(Math.random() * ratio_max);

    // rule_special
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_special;
    if (ratio_base <= no && no < ratio_target) {
      rule_special(msg);
    }

    // rule_weapon_type
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_weapon_type;
    if (ratio_base <= no && no < ratio_target) {
      rule_weapon_type(msg);
    }

    // rule_sub_weapon
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_sub_weapon;
    if (ratio_base <= no && no < ratio_target) {
      rule_sub_weapon(msg);
    }

    // rule_mix
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_mix;
    if (ratio_base <= no && no < ratio_target) {
      rule_mix(msg);
    }

    // rule_all_specify
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_all_specify;
    if (ratio_base <= no && no < ratio_target) {
      rule_all_specify(msg);
    }

    // rule_ban_weapon_type
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_ban_weapon_type;
    if (ratio_base <= no && no < ratio_target) {
      rule_ban_weapon_type(msg);
    }

    // rule_no_custom
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_no_custom;
    if (ratio_base <= no && no < ratio_target) {
      rule_no_custom(msg);
    }

    // rule_all_hydra
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_all_hydra;
    if (ratio_base <= no && no < ratio_target) {
      rule_all_hydra(msg);
    }

    // rule_only_one_weapon
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_only_one_weapon;
    if (ratio_base <= no && no < ratio_target) {
      rule_only_one_weapon(msg);
    }

    // rule_daikon
    ratio_base = ratio_target;
    ratio_target = ratio_base + ratio_daikon;
    if (ratio_base <= no && no < ratio_target) {
      rule_daikon(msg);
    }
  }
});

client.login(token);
