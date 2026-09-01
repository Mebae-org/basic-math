# 練習問題 — 第4章 指数関数と対数関数

> 対応: [`../docs/index.md`](../docs/index.md)
>
> 書式規則（全章共通）:
> - 各問は `## 問N` で始める
> - 解答は `<details><summary>解答</summary>` で囲む
> - details の先頭に正答を `**答: 〜**` で1行書く
> - 選択肢が理解を助ける場合だけ `**選択: A / B**` を答の次に置く
> - 答えの行より後ろは途中式・解説として扱う

---

## 4.1 $n$ 乗根

## 問1
$81$ の実数の4乗根をすべて求めよ。また、$\sqrt[4]{81}$ の値を求めよ。

<details><summary>解答</summary>

**答: 4乗根は $-3,3$、$\sqrt[4]{81}=3$**

$x^4=81=3^4$ より $x=\pm3$。根号は非負の根を表す。

</details>

## 問2
$\sqrt[6]{(-5)^6}$ を計算せよ。

<details><summary>解答</summary>

**答: $5$**

偶数乗根では $\sqrt[6]{a^6}=|a|$ だから、$|-5|=5$。

</details>

## 問3
方程式 $x^5=-32$ と $x^4=-16$ の実数解をそれぞれ求めよ。

<details><summary>解答</summary>

**答: $x^5=-32$ は $x=-2$、$x^4=-16$ は実数解なし**

奇数乗は負の値をとるので $(-2)^5=-32$。偶数乗は常に非負である。

</details>

---

## 4.2 指数法則と有理数指数

## 問4
$2^5\cdot2^{-3}\div2^4$ を計算せよ。

<details><summary>解答</summary>

**答: $\dfrac14$**

$2^{5-3-4}=2^{-2}=\dfrac14$。

</details>

## 問5
$16^{3/4}$ を計算せよ。

<details><summary>解答</summary>

**答: $8$**

$16^{3/4}=(\sqrt[4]{16})^3=2^3=8$。

</details>

## 問6
$a>0$ のとき、$\dfrac{a^{5/2}a^{-1/3}}{a^{7/6}}$ を簡単にせよ。

<details><summary>解答</summary>

**答: $a$**

指数は $\dfrac52-\dfrac13-\dfrac76=\dfrac{15-2-7}{6}=1$。

</details>

---

## 4.3 指数関数とグラフ

## 問7
$y=3^x$ の定義域、値域、増減、水平漸近線を答えよ。

<details><summary>解答</summary>

**答: 定義域は実数全体、値域は $y>0$、単調増加、水平漸近線は $y=0$**

底が $3>1$ なので増加する。指数関数の値は常に正である。

</details>

## 問8
$y=\left(\dfrac12\right)^{x+2}+4$ は $y=\left(\dfrac12\right)^x$ をどう移動したものか。漸近線と値域も答えよ。

<details><summary>解答</summary>

**答: 左へ $2$、上へ $4$ 移動。漸近線は $y=4$、値域は $y>4$**

$x$ を $x+2$ に置き換えると左へ2移動し、最後の $+4$ で上へ4移動する。

</details>

## 問9
$y=-2^{x-1}+3$ の $y$ 切片、水平漸近線、値域を求めよ。

<details><summary>解答</summary>

**答: $y$ 切片は $\left(0,\dfrac52\right)$、漸近線は $y=3$、値域は $y<3$**

$x=0$ で $y=-2^{-1}+3=\dfrac52$。$2^{x-1}>0$ なので $y<3$。

</details>

---

## 4.4 指数方程式

## 問10
$3^{2x-1}=27$ を解け。

<details><summary>解答</summary>

**答: $x=2$**

$27=3^3$ より $2x-1=3$。

</details>

## 問11
$2^{x+1}=8^{x-1}$ を解け。

<details><summary>解答</summary>

**答: $x=2$**

$8=2^3$ より $x+1=3x-3$。

</details>

## 問12
$9^x-10\cdot3^x+9=0$ を解け。

<details><summary>解答</summary>

**答: $x=0,2$**

$t=3^x>0$ と置くと $t^2-10t+9=(t-1)(t-9)=0$。$3^x=1,9$ より求める解を得る。

</details>

---

## 4.5 指数不等式

## 問13
$2^{x+1}<16$ を解け。

<details><summary>解答</summary>

**答: $x<3$**

$16=2^4$ で底は $2>1$ だから、$x+1<4$。

</details>

## 問14
$\left(\dfrac14\right)^{2x-1}\leq\left(\dfrac14\right)^{x+2}$ を解け。

<details><summary>解答</summary>

**答: $x\geq3$**

$0<\dfrac14<1$ なので指数の大小は逆になり、$2x-1\geq x+2$。

</details>

## 問15
$4^x-5\cdot2^x+6<0$ を解け。

<details><summary>解答</summary>

**答: $1<x<\log_2 3$**

$t=2^x>0$ と置くと $(t-2)(t-3)<0$ より $2<t<3$。$2^x$ は増加関数なので $1<x<\log_2 3$。

</details>

---

## 4.6 対数の定義

## 問16
$\log_5 125$ を求めよ。

<details><summary>解答</summary>

**答: $3$**

$5^3=125$ だからである。

</details>

## 問17
$\log_4\dfrac1{64}$ を求めよ。

<details><summary>解答</summary>

**答: $-3$**

$4^{-3}=\dfrac1{64}$。

</details>

## 問18
$\log_{1/3}9$ を求め、底と真数が対数の条件を満たすことも確認せよ。

<details><summary>解答</summary>

**答: $-2$。底は $\dfrac13>0,\ \dfrac13\neq1$、真数は $9>0$**

$\left(\dfrac13\right)^{-2}=9$ より定義に従って $-2$ となる。

</details>

---

## 4.7 対数法則と計算

## 問19
$\log_3 6+\log_3 9-\log_3 2$ を計算せよ。

<details><summary>解答</summary>

**答: $3$**

$\log_3\left(\dfrac{6\cdot9}{2}\right)=\log_3 27=3$。

</details>

## 問20
$\log_2 7$ を常用対数を用いて表せ。

<details><summary>解答</summary>

**答: $\dfrac{\log 7}{\log 2}$**

底の変換公式 $\log_aM=\dfrac{\log_bM}{\log_ba}$ を使う。

</details>

## 問21
$x>0$ のとき、$2\log_a x+\log_a 3-\log_a 6$ を一つの対数にまとめよ。ただし $a>0,\ a\neq1$ とする。

<details><summary>解答</summary>

**答: $\log_a\dfrac{x^2}{2}$**

$2\log_a x=\log_a x^2$ とし、積・商の法則を使うと $\log_a\left(\dfrac{3x^2}{6}\right)$ となる。

</details>

---

## 4.8 対数関数とグラフ

## 問22
$y=\log_{1/2}x$ の定義域、値域、増減、垂直漸近線を答えよ。

<details><summary>解答</summary>

**答: 定義域は $x>0$、値域は実数全体、単調減少、垂直漸近線は $x=0$**

底が $0<\dfrac12<1$ なので減少する。

</details>

## 問23
$y=\log_3(x+2)-1$ の定義域と垂直漸近線を求め、元のグラフからの移動を述べよ。

<details><summary>解答</summary>

**答: 定義域は $x>-2$、漸近線は $x=-2$。$y=\log_3x$ を左へ $2$、下へ $1$ 移動**

真数条件は $x+2>0$。平行移動に伴って漸近線も $x=-2$ となる。

</details>

## 問24
$y=\log_2x$ のグラフ上で $y=-3$ となる点の座標を求めよ。

<details><summary>解答</summary>

**答: $\left(\dfrac18,-3\right)$**

$\log_2x=-3$ は $x=2^{-3}=\dfrac18$ と同値である。

</details>

---

## 4.9 対数方程式

## 問25
$\log_3(x-2)=2$ を解け。

<details><summary>解答</summary>

**答: $x=11$**

真数条件は $x>2$。$x-2=3^2=9$ より $x=11$ で、条件を満たす。

</details>

## 問26
$\log_2(x+1)=\log_2(7-x)$ を解け。

<details><summary>解答</summary>

**答: $x=3$**

真数条件は $-1<x<7$。$x+1=7-x$ より $x=3$ で、条件内にある。

</details>

## 問27
$\log_2x+\log_2(x-2)=3$ を解け。

<details><summary>解答</summary>

**答: $x=4$**

真数条件は $x>2$。$x(x-2)=8$ より $(x-4)(x+2)=0$。条件を満たすのは $x=4$ のみ。

</details>

---

## 4.10 対数不等式

## 問28
$\log_2(x-1)\geq2$ を解け。

<details><summary>解答</summary>

**答: $x\geq5$**

真数条件は $x>1$。底が $2>1$ なので $x-1\geq4$ となり、これは真数条件も満たす。

</details>

## 問29
$\log_{1/3}(2x+1)<\log_{1/3}7$ を解け。

<details><summary>解答</summary>

**答: $x>3$**

真数条件は $x>-\dfrac12$。底が1未満なので $2x+1>7$、すなわち $x>3$。

</details>

## 問30
$\log_2(x-1)\leq\log_2(5-x)$ を解け。

<details><summary>解答</summary>

**答: $1<x\leq3$**

真数条件は $1<x<5$。底が $2>1$ なので $x-1\leq5-x$、すなわち $x\leq3$。共通部分を取る。

</details>
