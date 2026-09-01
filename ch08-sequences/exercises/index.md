# 練習問題 — 第8章 数列

> 対応: [`../docs/index.md`](../docs/index.md)
>
> 書式規則:
> - 各問は `## 問N` で始める
> - 解答は `<details><summary>解答</summary>` で囲む
> - details の最初の解答行に正答を `**答: 〜**` で書く
> - 選択肢が理解の助けになる場合は、答えの次の行に `**選択: A / B**` を置く
> - 答え・選択の行より後ろは途中式または解説として扱う

---

## 8.1 数列と一般項

## 問1
数列 $2,5,8,11,\dots$ の一般項 $a_n$ を求めよ。

<details><summary>解答</summary>

**答: $a_n=3n-1$**

第 $n$ 項は初項 $2$ に $3$ を $n-1$ 回加えた数なので、$a_n=2+3(n-1)=3n-1$。

</details>

## 問2
一般項が $a_n=n^2-n+1$ である数列の初めの4項を求めよ。

<details><summary>解答</summary>

**答: $1,3,7,13$**

$n=1,2,3,4$ を代入すると、それぞれ $1,3,7,13$ となる。

</details>

## 問3
初項から第 $n$ 項までの和が $S_n=3n^2+2n$ である数列の一般項を求めよ。

<details><summary>解答</summary>

**答: $a_n=6n-1$**

$a_1=S_1=5$。$n\ge2$ では
$$
a_n=S_n-S_{n-1}=3n^2+2n-\{3(n-1)^2+2(n-1)\}=6n-1.
$$
$n=1$ のときも $6n-1=5$ なので、この式でまとめられる。

</details>

## 問4
正方形を横一列につなげる。1個ではマッチ棒を4本使い、正方形を1個増やすたびに共有する1辺を除いて3本増える。正方形を $n$ 個つないだときのマッチ棒の本数 $a_n$ を求めよ。

<details><summary>解答</summary>

**答: $a_n=3n+1$ 本**

最初の4本に、追加する $n-1$ 個分の $3(n-1)$ 本を加えるから、$a_n=4+3(n-1)=3n+1$。

</details>

---

## 8.2 等差数列

## 問5
初項 $7$、公差 $4$ の等差数列の第15項を求めよ。

<details><summary>解答</summary>

**答: $63$**

$a_{15}=7+(15-1)\cdot4=63$。

</details>

## 問6
等差数列で $a_4=11,\,a_{10}=29$ である。一般項を求めよ。

<details><summary>解答</summary>

**答: $a_n=3n-1$**

$a_{10}-a_4=6d=18$ より $d=3$。初項は $a=11-3\cdot3=2$ なので、$a_n=2+3(n-1)=3n-1$。

</details>

## 問7
初めの20個の正の奇数 $1,3,5,\dots,39$ の和を求めよ。

<details><summary>解答</summary>

**答: $400$**

初項 $1$、末項 $39$、項数 $20$ の等差数列だから、$S_{20}=\dfrac{20(1+39)}2=400$。

</details>

## 問8
階段状の客席が12列あり、最前列は18席、後ろの列ほど1列につき3席ずつ増える。全座席数を求めよ。

<details><summary>解答</summary>

**答: $414$ 席**

第12列は $18+11\cdot3=51$ 席。したがって全座席数は $\dfrac{12(18+51)}2=414$ 席。

</details>

---

## 8.3 等比数列

## 問9
等比数列 $2,-6,18,-54,\dots$ の第6項を求めよ。

<details><summary>解答</summary>

**答: $-486$**

公比は $-3$ なので、$a_6=2(-3)^5=-486$。

</details>

## 問10
実数を項とする等比数列で $a_3=12,\,a_6=96$ である。公比と一般項を求めよ。

<details><summary>解答</summary>

**答: 公比 $2$、$a_n=3\cdot2^{n-1}$**

$a_6/a_3=r^3=8$ より、実数の公比は $r=2$。初項は $a=12/2^2=3$。

</details>

## 問11
初項 $4$、公比 $\dfrac12$ の等比数列の初項から第5項までの和を求めよ。

<details><summary>解答</summary>

**答: $\dfrac{31}{4}$**

$$
S_5=\frac{4\{1-(\frac12)^5\}}{1-\frac12}
=8\cdot\frac{31}{32}=\frac{31}{4}.
$$

</details>

## 問12
初項 $-3$、公比 $1$ の等比数列の初項から第12項までの和を求めよ。

<details><summary>解答</summary>

**答: $-36$**

すべての項が $-3$ なので、$S_{12}=12\cdot(-3)=-36$。

</details>

---

## 8.4 シグマ記号と和

## 問13
$\displaystyle\sum_{k=2}^{5}(2k-1)$ を求めよ。

<details><summary>解答</summary>

**答: $24$**

$(2\cdot2-1)+(2\cdot3-1)+(2\cdot4-1)+(2\cdot5-1)=3+5+7+9=24$。

</details>

## 問14
$\displaystyle\sum_{k=1}^{10}(3k+2)$ を求めよ。

<details><summary>解答</summary>

**答: $185$**

$$
3\sum_{k=1}^{10}k+2\sum_{k=1}^{10}1
=3\cdot\frac{10\cdot11}{2}+2\cdot10=185.
$$

</details>

## 問15
$\displaystyle\sum_{k=1}^{6}k^2$ を求めよ。

<details><summary>解答</summary>

**答: $91$**

$\displaystyle\frac{6\cdot7\cdot13}{6}=91$。

</details>

## 問16
$\displaystyle\sum_{k=4}^{8}2^k$ を求めよ。

<details><summary>解答</summary>

**答: $496$**

初項 $16$、公比 $2$、項数 $8-4+1=5$ の等比数列の和だから、$\displaystyle16\frac{2^5-1}{2-1}=496$。

</details>

---

## 8.5 数列の極限

## 問17
$\displaystyle\lim_{n\to\infty}\frac{5n+1}{2n-3}$ を求めよ。

<details><summary>解答</summary>

**答: $\dfrac52$**

分子と分母を $n$ で割ると、$\displaystyle\frac{5+1/n}{2-3/n}\to\frac52$。

</details>

## 問18
数列 $a_n=\left(\dfrac34\right)^n$ は収束するか。収束するなら極限を求めよ。

<details><summary>解答</summary>

**答: 収束し、極限は $0$**

**選択: 収束 / 発散**

$\left|\dfrac34\right|<1$ なので、$n\to\infty$ のとき $\left(\dfrac34\right)^n\to0$。

</details>

## 問19
$\displaystyle\lim_{n\to\infty}\left\{2+\left(-\dfrac12\right)^n\right\}$ を求めよ。

<details><summary>解答</summary>

**答: $2$**

$\left|-\dfrac12\right|<1$ より $\left(-\dfrac12\right)^n\to0$ なので、全体は $2$ に収束する。

</details>

## 問20
数列 $a_n=(-1)^n+\dfrac1n$ は収束するか。

<details><summary>解答</summary>

**答: 発散する**

**選択: 収束 / 発散**

偶数番目の項は $1+\dfrac1n\to1$、奇数番目の項は $-1+\dfrac1n\to-1$ となり、1つの値に近づかない。

</details>

---

## 8.6 無限等比級数

## 問21
無限等比級数 $8+4+2+1+\cdots$ の和を求めよ。

<details><summary>解答</summary>

**答: $16$**

初項 $8$、公比 $\dfrac12$ で $|r|<1$ だから収束し、和は $\displaystyle\frac8{1-1/2}=16$。

</details>

## 問22
無限等比級数 $3-3+3-3+\cdots$ は収束するか。

<details><summary>解答</summary>

**答: 発散する**

**選択: 収束 / 発散**

公比は $-1$ で $|r|=1$。部分和は $3,0,3,0,\dots$ と振動する。

</details>

## 問23
循環小数 $0.272727\dots$ を分数で表せ。

<details><summary>解答</summary>

**答: $\dfrac3{11}$**

$0.27+0.0027+\cdots$ は初項 $\dfrac{27}{100}$、公比 $\dfrac1{100}$ の無限等比級数なので、
$$
\frac{27/100}{1-1/100}=\frac{27}{99}=\frac3{11}.
$$

</details>

## 問24
ボールを高さ $10\,\mathrm{m}$ から落とす。地面に当たるたびに直前の高さの $60\%$ まで跳ね上がるとき、ボールが進む距離の総和を求めよ。

<details><summary>解答</summary>

**答: $40\,\mathrm{m}$**

最初の落下は $10\,\mathrm{m}$。その後は $6,3.6,\dots$ の上昇と同じ距離の下降があるので、
$$
10+2\left(\frac6{1-0.6}\right)=10+30=40.
$$

</details>
