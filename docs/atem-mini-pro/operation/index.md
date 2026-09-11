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

## 映像入力を選択する

「1・2・3・4」のうち、使用する映像が接続されている番号のボタンを押します。選択した入力の映像が出力されます。

## CUT

「CUT」ボタンを押すと、選択した映像へ瞬時に切り替わります。

## AUTO

「AUTO」ボタンを押すと、設定されているトランジション効果を使って選択した映像へ切り替わります。

## KEY

「KEY」ボタンは、キー合成した映像の表示・非表示を切り替えるときに使用します。

## 授業開始前の確認

HDMI入力、HDMI OUT、映像切り替え、クロマキー合成が正常に動作することを確認します。
