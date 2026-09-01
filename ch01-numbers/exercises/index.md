# 練習問題 — 第1章 数と式

> 対応: [`../docs/index.md`](../docs/index.md)
>
> 書式規則（今後の章も共通）:
> - 各問は `## 問N` で始める
> - 解答は `<details><summary>解答</summary>` で囲む
> - details の先頭に正答を `**答: 〜**` で1行書く
> - 選択式は答えの行の直前に `**選択: A / B**` を置く
> - 答えの行より後ろは解説として扱う

---

## 1.1 数の分類

## 問1
$6$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 有理数**

整数はすべて有理数（$6=\frac{6}{1}$ と表せる）。

</details>

---

## 問2
$\sqrt{25}$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 有理数**

$\sqrt{25}=5$。ルートが付いていても、中身が平方数なら有理数になる。

</details>

## 問3
$\sqrt{3}$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 無理数**

$3$ は平方数ではないので $\sqrt{3}$ は分数で表せない。

</details>

## 問4
$-\dfrac{2}{9}$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 有理数**

整数どうしの分数なので有理数。

</details>

## 問5
$0.666\dots$（$0.\overline{6}$）は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 有理数**

循環小数は分数で表せる（$0.\overline{6}=\frac{2}{3}$）ので有理数。

</details>

## 問6
$\pi$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 無理数**

$\pi$ は循環しない無限小数で、分数で表せない。

</details>

## 問7
$2+\sqrt{2}$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 無理数**

有理数 $+$ 無理数は無理数になる。

</details>

## 問8
$\sqrt{2}\times\sqrt{2}$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 有理数**

$\sqrt{2}\times\sqrt{2}=2$ なので有理数。

</details>

## 問9
$\dfrac{\sqrt{2}}{2}$ は有理数か、無理数か。

<details><summary>解答</summary>

**選択: 有理数 / 無理数**
**答: 無理数**

無理数を $0$ でない有理数で割っても無理数のまま。

</details>

## 問10
「すべての整数は有理数である」は正しいか。

<details><summary>解答</summary>

**選択: 正しい / 正しくない**
**答: 正しい**

整数 $n$ は $\dfrac{n}{1}$ と表せるので有理数の定義を満たす。よって $\mathbb{Z}\subset\mathbb{Q}$。

</details>

---

## 1.2 絶対値

## 問11
$|{-12}|$ を求めよ。

<details><summary>解答</summary>

**答: 12**

絶対値は原点からの距離。

</details>

## 問12
$|4-9|$ を求めよ。

<details><summary>解答</summary>

**答: 5**

$4-9=-5$、$|{-5}|=5$。

</details>

## 問13
$|{-3}|+|{-6}|$ を求めよ。

<details><summary>解答</summary>

**答: 9**

$3+6=9$。

</details>

## 問14
$|2-2|$ を求めよ。

<details><summary>解答</summary>

**答: 0**

$|0|=0$。

</details>

## 問15
$|x|=5$ を満たす正の実数 $x$ を求めよ。

<details><summary>解答</summary>

**答: 5**

原点からの距離が $5$ の点は $x=5,\ -5$ の2つ。そのうち正のものは $5$。

</details>

## 問16
$a<0$ のとき、$|a|+a$ の値を求めよ。

<details><summary>解答</summary>

**答: 0**

$a<0$ のとき $|a|=-a$ なので $|a|+a=-a+a=0$。

</details>

## 問17
数直線上で $2$ と $7$ の間の距離を求めよ。

<details><summary>解答</summary>

**答: 5**

$|7-2|=5$。

</details>

---

## 1.3 多項式の計算

## 問18
$(3x^2-x+2)+(x^2+4x-5)$ を計算せよ。

<details><summary>解答</summary>

**選択: $4x^2+3x-3$ / $4x^2+3x+3$ / $2x^2+3x-3$**
**答: $4x^2+3x-3$**

同類項をまとめる: $(3+1)x^2+(-1+4)x+(2-5)$。

</details>

## 問19
$(5x-3)-(2x-8)$ を計算せよ。

<details><summary>解答</summary>

**選択: $3x+5$ / $3x-11$ / $7x-11$**
**答: $3x+5$**

$5x-3-2x+8=3x+5$。引く方のカッコの符号に注意。

</details>

---

## 1.4 展開（乗法公式）

## 問20
$(x+4)^2$ を展開せよ。

<details><summary>解答</summary>

**選択: $x^2+8x+16$ / $x^2+16$ / $x^2+4x+16$**
**答: $x^2+8x+16$**

$(a+b)^2=a^2+2ab+b^2$ で $a=x,\ b=4$。

</details>

## 問21
$(3x-2)^2$ を展開せよ。

<details><summary>解答</summary>

**選択: $9x^2-12x+4$ / $9x^2-6x+4$ / $9x^2+12x+4$**
**答: $9x^2-12x+4$**

$(3x)^2-2\cdot3x\cdot2+2^2$。

</details>

## 問22
$(x+7)(x-7)$ を展開せよ。

<details><summary>解答</summary>

**選択: $x^2-49$ / $x^2+49$ / $x^2-14x-49$**
**答: $x^2-49$**

$(a+b)(a-b)=a^2-b^2$。

</details>

## 問23
$(x+2)(x+5)$ を展開せよ。

<details><summary>解答</summary>

**選択: $x^2+7x+10$ / $x^2+10x+7$ / $x^2+7x+7$**
**答: $x^2+7x+10$**

$(x+a)(x+b)=x^2+(a+b)x+ab$。

</details>

## 問24
$(2x+1)(x-3)$ を展開せよ。

<details><summary>解答</summary>

**選択: $2x^2-5x-3$ / $2x^2+5x-3$ / $2x^2-6x-3$**
**答: $2x^2-5x-3$**

$2x\cdot x+2x\cdot(-3)+1\cdot x+1\cdot(-3)$。

</details>

---

## 1.5 因数分解

## 問25
$4x^2+6x$ の共通因数をすべてくくり出して因数分解せよ。

<details><summary>解答</summary>

**選択: $2x(2x+3)$ / $2(2x^2+3x)$ / $x(4x+6)$**
**答: $2x(2x+3)$**

共通因数は $2x$。数と文字の両方をくくり出す。

</details>

## 問26
$3x^2y-9xy^2$ の共通因数をすべてくくり出して因数分解せよ。

<details><summary>解答</summary>

**選択: $3xy(x-3y)$ / $3x(xy-3y^2)$ / $xy(3x-9y)$**
**答: $3xy(x-3y)$**

共通因数 $3xy$ をくくり出す。

</details>

## 問27
$x^2-25$ を因数分解せよ。

<details><summary>解答</summary>

**選択: $(x+5)(x-5)$ / $(x-5)^2$ / $(x+5)^2$**
**答: $(x+5)(x-5)$**

$a^2-b^2=(a+b)(a-b)$ の逆利用。

</details>

## 問28
$x^2+10x+25$ を因数分解せよ。

<details><summary>解答</summary>

**選択: $(x+5)^2$ / $(x-5)^2$ / $(x+5)(x-5)$**
**答: $(x+5)^2$**

$a^2+2ab+b^2=(a+b)^2$。

</details>

## 問29
$x^2+8x+15$ を因数分解せよ。

<details><summary>解答</summary>

**選択: $(x+3)(x+5)$ / $(x+1)(x+15)$ / $(x-3)(x-5)$**
**答: $(x+3)(x+5)$**

かけて $15$・足して $8$ になる2数は $3,\ 5$。

</details>

## 問30
$x^2-2x-8$ を因数分解せよ。

<details><summary>解答</summary>

**選択: $(x-4)(x+2)$ / $(x+4)(x-2)$ / $(x-4)(x-2)$**
**答: $(x-4)(x+2)$**

かけて $-8$・足して $-2$ になる2数は $-4,\ 2$。

</details>

## 問31
$x^2-9x+20$ を因数分解せよ。

<details><summary>解答</summary>

**選択: $(x-4)(x-5)$ / $(x+4)(x+5)$ / $(x-2)(x-10)$**
**答: $(x-4)(x-5)$**

かけて $20$・足して $-9$ になる2数は $-4,\ -5$。

</details>

---

## 1.6 整式の除法と因数定理

## 問32
$2x^3-3x^2+4x-5$ を $x-2$ で割った商と余りを求めよ。

<details><summary>解答</summary>

**答: 商 $2x^2+x+6$、余り $7$**

最高次の項から順に割ると
$$
2x^3-3x^2+4x-5=(x-2)(2x^2+x+6)+7
$$
となる。

</details>

## 問33
$P(x)=x^3-2x+5$ を $x+2$ で割った余りを求めよ。

<details><summary>解答</summary>

**答: $1$**

剰余の定理より、余りは
$$P(-2)=(-2)^3-2(-2)+5=1$$
である。

</details>

## 問34
$x^3+x^2-4x-4$ を因数分解せよ。

<details><summary>解答</summary>

**答: $(x+1)(x-2)(x+2)$**

$P(-1)=0$ なので $x+1$ が因数である。割り算を行うと
$$
P(x)=(x+1)(x^2-4)=(x+1)(x-2)(x+2)
$$
となる。

</details>

---

## 1.7 分数式

## 問35
$\dfrac{x^2-9}{x^2-x-6}$ を簡単にし、定義されない $x$ の値も答えよ。

<details><summary>解答</summary>

**答: $\dfrac{x+3}{x+2}$（$x\neq3,-2$）**

分子と分母を因数分解すると
$$
\frac{(x-3)(x+3)}{(x-3)(x+2)}=\frac{x+3}{x+2}
$$
となる。約分後も、もとの分母を $0$ にする $x=3,-2$ は除く。

</details>

## 問36
$\dfrac{x^2-1}{(x+1)^2}\cdot\dfrac{x+1}{x-1}$ を簡単にせよ。

<details><summary>解答</summary>

**答: $1$（$x\neq-1,1$）**

$x^2-1=(x-1)(x+1)$ と因数分解して約分する。もとの各分母から $x=-1,1$ は除く。

</details>

## 問37
$\dfrac{1}{x-1}+\dfrac{2}{x+1}$ を計算せよ。

<details><summary>解答</summary>

**答: $\dfrac{3x-1}{x^2-1}$（$x\neq1,-1$）**

共通分母を $(x-1)(x+1)$ とすると
$$
\frac{x+1+2(x-1)}{(x-1)(x+1)}=\frac{3x-1}{x^2-1}
$$
となる。

</details>

---

## 1.8 平方根の計算

## 問38
$\sqrt{72}$ を簡単にせよ。

<details><summary>解答</summary>

**答: $6\sqrt2$**

$72=36\cdot2$ なので、$\sqrt{72}=\sqrt{36}\sqrt2=6\sqrt2$。

</details>

## 問39
$2\sqrt{12}-\sqrt{27}$ を簡単にせよ。

<details><summary>解答</summary>

**答: $\sqrt3$**

$\sqrt{12}=2\sqrt3$、$\sqrt{27}=3\sqrt3$ より
$$2\sqrt{12}-\sqrt{27}=4\sqrt3-3\sqrt3=\sqrt3$$
となる。

</details>

## 問40
$\dfrac{3}{\sqrt5-1}$ の分母を有理化せよ。

<details><summary>解答</summary>

**答: $\dfrac{3(\sqrt5+1)}{4}$**

分母の共役な式を掛けると
$$
\frac{3}{\sqrt5-1}\cdot\frac{\sqrt5+1}{\sqrt5+1}
=\frac{3(\sqrt5+1)}{5-1}
$$
となる。

</details>

---

## 1.9 複素数

## 問41
$2a+(b-1)i=6+3i$ を満たす実数 $a,b$ を求めよ。

<details><summary>解答</summary>

**答: $a=3,\ b=4$**

複素数の相等から実部と虚部をそれぞれ比較し、$2a=6$、$b-1=3$ を解く。

</details>

## 問42
$(3+2i)-(1-4i)$ と $(3+2i)(1-4i)$ を計算せよ。

<details><summary>解答</summary>

**答: $2+6i,\ 11-10i$**

加減では実部と虚部をまとめる。乗法では展開して $i^2=-1$ を使う。
$$
(3+2i)(1-4i)=3-12i+2i-8i^2=11-10i
$$

</details>

## 問43
$\dfrac{1+2i}{2-i}$ と $|1+2i|$ を求めよ。

<details><summary>解答</summary>

**答: $i,\ \sqrt5$**

除法では分母の共役複素数を掛ける。
$$
\frac{1+2i}{2-i}\cdot\frac{2+i}{2+i}
=\frac{5i}{5}=i
$$
また、$|1+2i|=\sqrt{1^2+2^2}=\sqrt5$。

</details>
