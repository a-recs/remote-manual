# 本体操作

ATEM Mini Pro本体で、授業中に使用する基本操作を説明します。

![ATEM Mini Pro本体](../../images/Atem/Atem01.png){ #atem-main-photo }

*ATEM Mini Pro本体。1〜4のボタンで入力映像を選択します。*

<img id="atem-follow-photo" src="../../images/Atem/Atem01.png" alt="ATEM Mini Pro本体（追従表示）" aria-hidden="true">

<style>
  #atem-follow-photo {
    display: none;
  }

  @media screen and (min-width: 76.25em) {
    #atem-follow-photo.is-visible {
      display: block;
      position: fixed;
      bottom: 4.5rem;
      right: 1.5rem;
      z-index: 2;
      width: 16rem;
      max-height: calc(100vh - 6rem);
      margin: 0;
      border-radius: 0.2rem;
      box-shadow: 0 0.2rem 0.6rem rgb(0 0 0 / 18%);
      object-fit: contain;
    }
  }
</style>

<script>
  (() => {
    const mainPhoto = document.getElementById("atem-main-photo");
    const followPhoto = document.getElementById("atem-follow-photo");

    if (!mainPhoto || !followPhoto || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      followPhoto.classList.toggle("is-visible", !entry.isIntersecting);
    });

    observer.observe(mainPhoto);
  })();
</script>

## ATEM Mini Pro 本体操作パネル

本体のボタンは、映像・音声の切り替え、合成、録画など、役割ごとにまとまっています。実機の表示と見比べながら確認してください。

### 1. MIC 1 / MIC 2

背面の **MIC 1・MIC 2端子**に接続した外部音声を操作します。

| ボタン | 動作 |
| --- | --- |
| ON | その入力の音声を常時有効にする |
| OFF | その入力の音声を切る（ミュート） |
| ▲ / ▼ | 入力音声のレベルを上げる／下げる |

!!! note "通常の遠隔授業では操作不要"
    遠隔授業ではNeatのマイクを使用するため、通常はMIC 1 / MIC 2を使用しません。

### 2. HDMI入力 1～4

大きな **1・2・3・4** ボタンで、HDMI INPUT 1～4に接続した映像を切り替えます。**赤く点灯している番号**が、現在Program（実際に配信・出力される完成映像）として出ている映像です。

遠隔授業では、教材PC、タブレット、実験カメラなどの映像切り替えに使用します。

#### 各HDMI入力の音声操作

| ボタン | 動作 |
| --- | --- |
| AFV | **Audio Follow Video**の略。選んだ映像に音声を追従させる |
| ON | 映像の選択に関係なく、その入力の音声を常時流す |
| OFF | その入力の音声を切る |
| ▲ / ▼ | 音量を調整する |

!!! example "AFVの例"
    HDMI 1のAFVがONなら、映像1を表示している間だけHDMI 1の音声が流れます。映像2へ切り替えると、HDMI 1の音声も自動的に切れます。

!!! tip "AFVとONの違い"
    **AFV：** 映像に音声を追従させる<br>
    **ON：** 映像に関係なく音声を常時流す

### 3. STILL

ATEM Software ControlのMedia Poolへあらかじめ登録した静止画を表示します。HDMI 1～4とは別の映像ソースとして選べます。

「授業開始までお待ちください」「休憩中」「授業は終了しました」などの案内画像に活用できます。

!!! info "画像を準備する手順"
    1. ATEM Software Controlの **Media → Media Pool** へ画像を登録します。
    2. Media Playerで表示する画像を選択します。
    3. 本体の **STILL** ボタンを押します。

### 4. BLACK

黒い画面を映像ソースとして選択するボタンです。HDMI 1～4やSTILLと同じように扱われ、CUTでBLACKを選択すると瞬時に黒画面へ切り替わります。

### 5. PICTURE IN PICTURE

メイン映像の上に、別の映像を小窓で表示する機能です。

| ボタン | 動作 |
| --- | --- |
| 4つの位置ボタン | 小窓の位置を左上・右上・左下・右下から選ぶ |
| ON | Picture in Pictureを表示する |
| OFF | Picture in Pictureを解除する |

初期状態ではHDMI入力1が小窓の映像に設定されています。変更するときは、ATEM Software Controlの **Upstream Key 1 → DVE → Fill Source** から映像を選びます。

!!! example "活用例"
    教材画面を全面表示しながら、タイマーや別カメラの映像を小窓に表示できます。

### 6. DVEについて

**DVE（Digital Video Effects）**は、映像のサイズや位置を変更する機能です。Picture in PictureもDVEを利用しています。

!!! warning "注意：Picture in Pictureとクロマキーは同時に使えません"
    ATEM Mini Proでは、Picture in Picture（DVE）とクロマキー（Chroma Key）が同じ **Upstream Keyer 1** を使用します。そのため、DVEを使用している状態とChroma Keyを使用している状態は同時に利用できません。

    Picture in Pictureを使ったあとにクロマキー映像が出なくなった場合は、ATEM Software Controlで **Upstream Key 1 → Chroma** に戻してください。

### 7. KEY

クロマキーなど、設定済みのキー合成をON / OFFします。

| ボタン | 動作 |
| --- | --- |
| ON | 設定したキー合成を表示する |
| OFF | キー合成を解除する |

!!! note "通常の遠隔授業で使用"
    教材画面の上に教師映像を重ねるクロマキー表示で使用します。

### 8. RECORD

USB-C経由で外部ストレージを接続している場合に、ATEM Mini Proで録画します。

| ボタン | 動作 |
| --- | --- |
| REC | 録画を開始する |
| STOP | 録画を停止する |

!!! note "必要なときだけ使用"
    通常の授業配信では必須ではありません。

### 9. STREAM

YouTubeなどへATEM Mini Pro本体から直接ライブ配信するときに使用します。

| ボタン | 動作 |
| --- | --- |
| ON AIR | ライブ配信を開始する |
| OFF | ライブ配信を停止する |

!!! note "通常の遠隔授業では操作不要"
    Zoomを使った通常の遠隔授業では基本的に使用しません。

!!! warning "KEYのONとは別の機能です"
    STREAMのON AIRはライブ配信の開始、KEYのONはキー合成の表示です。押し間違えないよう、ボタンのグループ名を確認してください。

### 10. DURATION

AUTOによる映像切り替えにかける時間を **0.5・1.0・1.5・2.0秒** から選びます。

たとえば **MIX ＋ 1.0秒 ＋ AUTO** なら、現在の映像から次の映像へ1秒かけて切り替わります。

### 11. EFFECT

AUTOで映像を切り替えるときのトランジション（場面転換）効果を選びます。

| 効果 | 動作 |
| --- | --- |
| MIX | 2つの映像を徐々に重ねながら切り替える |
| DIP | 一度、別の映像や色を経由して切り替える |
| WIPE | 画面を左右または上下から切り替える |
| DVE | 映像を押し出したり縮小したりして切り替える |

!!! tip "通常の遠隔授業ではMIXがおすすめ"
    MIXは切り替わりが自然で、初めてでも使いやすい効果です。

### 12. VIDEO OUT

背面の **HDMI OUT端子**に何を表示するか選択します。Program映像そのものを切り替える操作ではなく、確認用HDMI出力を変更する機能です。

| ボタン | HDMI OUTに表示する内容 |
| --- | --- |
| 1～4 | HDMI入力1～4の映像を直接表示する |
| M/V | Multi View。入力映像やProgramなどを一覧表示する |
| PGM | Program。実際に完成した配信映像を表示する |

!!! tip "合成結果を確認するとき"
    クロマキーなどを含む完成映像の確認には **PGM** を使用します。

### 13. CUT

現在の映像から次の映像へ瞬時に切り替えます。トランジション効果は使用しません。

### 14. AUTO

EFFECTで選んだ効果とDURATIONで選んだ時間を使い、映像を自動的に切り替えます。

!!! example "設定例"
    **MIX ＋ 1.0秒 ＋ AUTO**<br>
    → 1秒かけて滑らかに映像が切り替わります。

### 15. FTB

**FTB（Fade To Black）**は、現在のProgram映像全体を徐々に黒画面へフェードする機能です。もう一度押すと、黒画面から元の映像へ戻ります。配信の開始・終了時などに使用できます。

!!! tip "BLACKとFTBの違い"
    **BLACK：** 黒い映像ソースへ切り替える<br>
    **FTB：** 完成したProgram映像全体を黒へフェードする

FTBの速度は、ATEM Software Controlの **Fade to Black → RATE** で設定します。RATEが「0:04」などの場合は非常に速く、ほぼ瞬時に黒く見えます。授業配信では「1:00」程度から試すとフェードを確認しやすくなります。

## 授業開始前の確認

HDMI入力、HDMI OUT、映像切り替え、クロマキー合成が正常に動作することを確認します。
