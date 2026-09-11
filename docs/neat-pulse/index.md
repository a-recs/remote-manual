# Neat Pulse

Neat Pulseは、離れた場所にあるNeat端末の状態を確認し、必要に応じて遠隔操作するために使用します。

本マニュアルでは、遠隔授業で必要な操作に絞って説明します。

[Neat Pulseを開く](https://pulse.neat.no/){ .md-button .md-button--primary target="_blank" }

---

## 1　Neat Pulseにログインする

WebブラウザでNeat Pulseを開き、ログインします。

ログインには、**Googleアカウント、Microsoftアカウント、SAML SSO、またはメールアドレスとパスワード**を使用できます。

<a href="../images/neat-pulse/01-login.svg" target="_blank" rel="noopener">
  <img src="../images/neat-pulse/01-login.svg" alt="Neat Pulseログイン画面" loading="lazy" style="width:480px; max-width:100%; height:auto; display:block; margin:0.8rem 0 0.35rem; cursor:zoom-in;">
</a>
<small>実際の画面例　※画像をクリックすると拡大表示できます。</small>

---

## 2　端末の状態を確認する

ログインすると、管理しているNeat端末を確認できる **［Devices］** 画面が表示されます。

1. **［Devices］** を開きます。
2. 確認したい学校・教室の端末を探します。
3. 対象端末の状態を確認します。

<a href="../images/neat-pulse/02-devices.svg" target="_blank" rel="noopener">
  <img src="../images/neat-pulse/02-devices.svg" alt="Neat Pulse Devices画面" loading="lazy" style="width:560px; max-width:100%; height:auto; display:block; margin:0.8rem 0 0.35rem; cursor:zoom-in;">
</a>
<small>実際の画面例（学校名・端末名等は公開用にぼかしています）　※画像をクリックすると拡大表示できます。</small>

| 状態 | 対応の目安 |
|---|---|
| **オンライン** | Neat Pulseから端末を確認・遠隔操作します。 |
| **オフライン** | 受信校側で電源やネットワーク接続を確認します。 |

!!! tip "遠隔操作する前に"
    対象端末が **オンライン** になっていることを確認します。

---

## 3　遠隔操作する

対象端末がオンラインの場合は、Neat Pulseから遠隔操作します。

1. **［Devices］** から対象端末を選択します。
2. 端末の詳細画面右上にある **［Remote control this device］** のアイコンを選択します。

<a href="../images/neat-pulse/03-remote-control.svg" target="_blank" rel="noopener">
  <img src="../images/neat-pulse/03-remote-control.svg" alt="Neat Pulse端末詳細画面のRemote controlボタン" loading="lazy" style="width:560px; max-width:100%; height:auto; display:block; margin:0.8rem 0 0.35rem; cursor:zoom-in;">
</a>
<small>実際の画面例（端末名・IPアドレス・MACアドレス・シリアル番号等は公開用にぼかしています）　※画像をクリックすると拡大表示できます。</small>

3. 別のブラウザ画面で、対象のNeat端末の画面が表示されます。
4. 表示された画面を操作して、必要な対応を行います。

<a href="../images/neat-pulse/04-remote-session.svg" target="_blank" rel="noopener">
  <img src="../images/neat-pulse/04-remote-session.svg" alt="Neat Pulseリモート操作画面" loading="lazy" style="width:560px; max-width:100%; height:auto; display:block; margin:0.8rem 0 0.35rem; cursor:zoom-in;">
</a>
<small>実際の画面例（端末名・シリアル番号・操作者名・ルームコード等は公開用にぼかしています）　※画像をクリックすると拡大表示できます。</small>

5. 操作が終わったら、Neat端末が通常の画面に戻っていることを確認して遠隔操作を終了します。

!!! warning "ミーティングを開始した場合は、退室してから遠隔操作を終了"
    遠隔操作中にZoom等のミーティングを開始した場合は、**必ずミーティングから退室した状態で遠隔操作を終了します。**

    ミーティングに参加したまま遠隔操作だけを終了すると、受信校側のNeat端末が**ミーティング画面のまま残る**ため、次に使用するときに支障が出ます。

!!! note "受信校側で確認が必要な場合"
    端末の設定によっては、遠隔操作を開始するときに **受信校側で許可操作が必要** になる場合があります。
