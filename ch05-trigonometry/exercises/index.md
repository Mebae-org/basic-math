# 練習問題 — 第5章 三角関数

> 対応: [`../docs/index.md`](../docs/index.md)
>
> 書式規則（全章共通）:
> - 各問は `## 問N` で始める
> - 解答は `<details><summary>解答</summary>` で囲む
> - details の先頭に正答を `**答: 〜**` で1行書く
> - 選択肢が理解を助ける場合だけ `**選択: A / B**` を答の次に置く
> - 答えの行より後ろは途中式・解説として扱う

---

## 5.1 弧度法

## 問1
$225^\circ$ を弧度法で表し、$\dfrac{7\pi}{6}$ を度数法で表せ。

<details><summary>解答</summary>

**答: $225^\circ=\dfrac{5\pi}{4}$、$\dfrac{7\pi}{6}=210^\circ$**

$225\cdot\dfrac{\pi}{180}=\dfrac{5\pi}{4}$、$\dfrac{7\pi}{6}\cdot\dfrac{180}{\pi}=210$。

</details>

## 問2
半径 $9$、中心角 $\dfrac{2\pi}{3}$ の扇形の弧の長さと面積を求めよ。

<details><summary>解答</summary>

**答: 弧の長さは $6\pi$、面積は $27\pi$**

$l=9\cdot\dfrac{2\pi}{3}=6\pi$、$S=\dfrac12\cdot9^2\cdot\dfrac{2\pi}{3}=27\pi$。

</details>

## 問3
半径 $5$ の円で弧の長さが $4\pi$ である扇形の中心角を、弧度法と度数法で求めよ。

<details><summary>解答</summary>

**答: $\dfrac{4\pi}{5}$、$144^\circ$**

$l=r\theta$ より $\theta=\dfrac{4\pi}{5}$。度数法では $\dfrac{4\pi}{5}\cdot\dfrac{180}{\pi}=144^\circ$。

</details>

---

## 5.2 一般角と三角関数

## 問4
$\theta=\dfrac{7\pi}{6}$ の $\sin\theta,\cos\theta,\tan\theta$ を求めよ。

<details><summary>解答</summary>

**答: $\sin\theta=-\dfrac12,\ \cos\theta=-\dfrac{\sqrt3}{2},\ \tan\theta=\dfrac1{\sqrt3}$**

基準角は $\dfrac\pi6$ で、終辺は第III象限にある。

</details>

## 問5
$\sin\theta=\dfrac35$ かつ $\theta$ の終辺が第II象限にあるとき、$\cos\theta$ と $\tan\theta$ を求めよ。

<details><summary>解答</summary>

**答: $\cos\theta=-\dfrac45,\ \tan\theta=-\dfrac34$**

$\cos^2\theta=1-\dfrac9{25}=\dfrac{16}{25}$。第II象限なので余弦は負である。

</details>

## 問6
$-\dfrac{13\pi}{4}$ と同じ終辺をもち、$0\leq\theta<2\pi$ を満たす角 $\theta$ を求め、その角で $\tan\theta$ が定義されるか答えよ。

<details><summary>解答</summary>

**答: $\theta=\dfrac{3\pi}{4}$、$\tan\theta$ は定義される**

$-\dfrac{13\pi}{4}+4\pi=\dfrac{3\pi}{4}$。このとき $\cos\theta=-\dfrac{\sqrt2}{2}\neq0$。

</details>

---

## 5.3 三角関数の性質とグラフ

## 問7
$\sin\left(-\dfrac\pi3\right)$ と $\cos\left(-\dfrac\pi3\right)$ を対称性を用いて求めよ。

<details><summary>解答</summary>

**答: $-\dfrac{\sqrt3}{2},\ \dfrac12$**

正弦は奇関数、余弦は偶関数である。

</details>

## 問8
$y=-3\cos\left(2x+\dfrac\pi2\right)+2$ の振幅、周期、中心線、横方向の移動を答えよ。

<details><summary>解答</summary>

**答: 振幅 $3$、周期 $\pi$、中心線 $y=2$、左へ $\dfrac\pi4$ 移動**

$2x+\dfrac\pi2=2\left(x+\dfrac\pi4\right)$。負号は上下反転を表すが振幅は絶対値である。

</details>

## 問9
$y=\tan(2x)$ の周期を求め、$0\leq x<\pi$ にある垂直漸近線をすべて答えよ。

<details><summary>解答</summary>

**答: 周期は $\dfrac\pi2$、垂直漸近線は $x=\dfrac\pi4,\dfrac{3\pi}{4}$**

$2x=\dfrac\pi2+k\pi$ より $x=\dfrac\pi4+\dfrac{k\pi}{2}$。

</details>

---

## 5.4 三角方程式と三角不等式

## 問10
$0\leq x<2\pi$ において、$2\cos x+\sqrt2=0$ を解け。

<details><summary>解答</summary>

**答: $x=\dfrac{3\pi}{4},\dfrac{5\pi}{4}$**

$\cos x=-\dfrac{\sqrt2}{2}$ となる第II、第III象限の角を選ぶ。

</details>

## 問11
$\tan x=\sqrt3$ の一般解を求めよ。

<details><summary>解答</summary>

**答: $x=\dfrac\pi3+k\pi\ (k\in\mathbb Z)$**

$\tan\dfrac\pi3=\sqrt3$ で、正接の周期は $\pi$ である。

</details>

## 問12
$0\leq x<2\pi$ において、$\sin x\geq\dfrac{\sqrt2}{2}$ を解け。

<details><summary>解答</summary>

**答: $\dfrac\pi4\leq x\leq\dfrac{3\pi}{4}$**

境界は $\dfrac\pi4,\dfrac{3\pi}{4}$。単位円の上側で $y$ 座標が条件を満たす区間を取る。

</details>

---

## 5.5 加法定理とその帰結

## 問13
$\cos15^\circ$ を加法定理で求めよ。

<details><summary>解答</summary>

**答: $\dfrac{\sqrt6+\sqrt2}{4}$**

$\cos(45^\circ-30^\circ)=\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ$。

</details>

## 問14
$\cos\theta=-\dfrac35$ かつ $\pi<\theta<\dfrac{3\pi}{2}$ のとき、$\sin2\theta$ と $\cos2\theta$ を求めよ。

<details><summary>解答</summary>

**答: $\sin2\theta=\dfrac{24}{25},\ \cos2\theta=-\dfrac7{25}$**

第III象限より $\sin\theta=-\dfrac45$。したがって $2\sin\theta\cos\theta=\dfrac{24}{25}$、$\cos^2\theta-\sin^2\theta=-\dfrac7{25}$。

</details>

## 問15
$3\sin x-4\cos x$ を $R\sin(x+\phi)$ の形に合成し、最大値を求めよ。ただし $-\pi<\phi\leq\pi$ とする。

<details><summary>解答</summary>

**答: $5\sin\left(x-\arctan\dfrac43\right)$、最大値は $5$**

$R=\sqrt{3^2+(-4)^2}=5$。$5\cos\phi=3,\ 5\sin\phi=-4$ より $\phi=-\arctan\dfrac43$。正弦の最大値が1なので全体の最大値は5。

</details>
