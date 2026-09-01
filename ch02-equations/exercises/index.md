# 練習問題 — 第2章 方程式と不等式

> 対応: [`../docs/index.md`](../docs/index.md)
>
> 書式規則（全章共通）:
> - 各問は `## 問N` で始める
> - 解答は `<details><summary>解答</summary>` で囲む
> - details の先頭に正答を `**答: 〜**` で1行書く
> - 選択肢が理解を助ける場合だけ `**選択: A / B**` を加える
> - 答えの行より後ろは途中式・解説として扱う

---

## 2.1 二次方程式

## 問1
$x^2-7x+12=0$ を解け。

<details><summary>解答</summary>

**答: $x=3,4$**

$(x-3)(x-4)=0$ と因数分解できる。

</details>

## 問2
$2x^2+3x-1=0$ を解の公式で解け。

<details><summary>解答</summary>

**答: $x=\dfrac{-3\pm\sqrt{17}}{4}$**

$a=2,b=3,c=-1$ より、$D=3^2-4\cdot2\cdot(-1)=17$。したがって $x=(-3\pm\sqrt{17})/4$。

</details>

## 問3
$x^2-6x+k=0$ が重解をもつように、定数 $k$ を定め、その重解も求めよ。

<details><summary>解答</summary>

**答: $k=9$、重解は $x=3$**

$D=(-6)^2-4k=0$ より $k=9$。方程式は $(x-3)^2=0$ となる。

</details>

---

## 2.2 高次方程式と因数定理

## 問4
$P(x)=x^3+2x^2-5x-6$ について、$x+1$ が因数か判定せよ。

<details><summary>解答</summary>

**答: $x+1$ は因数である**

因数定理より $P(-1)$ を調べる。$P(-1)=-1+2+5-6=0$ だから、$x+1$ は因数である。

</details>

## 問5
$x^3-4x^2+x+6=0$ を解け。

<details><summary>解答</summary>

**答: $x=-1,2,3$**

$P(-1)=0$ なので $x+1$ を因数にもつ。割ると $P(x)=(x+1)(x^2-5x+6)=(x+1)(x-2)(x-3)$。

</details>

## 問6
$x^4-5x^2+4=0$ を解け。

<details><summary>解答</summary>

**答: $x=-2,-1,1,2$**

$t=x^2$ と置くと $t^2-5t+4=(t-1)(t-4)=0$。よって $x^2=1,4$。

</details>

---

## 2.3 連立方程式

## 問7
$\begin{cases}2x+y=7\\x-y=2\end{cases}$ を解け。

<details><summary>解答</summary>

**答: $(x,y)=(3,1)$**

2式を加えると $3x=9$ なので $x=3$。第2式から $y=1$。

</details>

## 問8
$\begin{cases}y=x-1\\x^2+y^2=5\end{cases}$ を解け。

<details><summary>解答</summary>

**答: $(x,y)=(2,1),(-1,-2)$**

$y=x-1$ を代入すると $x^2+(x-1)^2=5$、すなわち $(x-2)(x+1)=0$。各 $x$ に対応する $y$ を求める。

</details>

## 問9
2数の和が $11$、積が $24$ である。この2数を求めよ。

<details><summary>解答</summary>

**答: $3$ と $8$**

一方を $x$、他方を $11-x$ とすると $x(11-x)=24$。$x^2-11x+24=(x-3)(x-8)=0$。

</details>

---

## 2.4 無理方程式

## 問10
$\sqrt{x+5}=3$ を解け。

<details><summary>解答</summary>

**答: $x=4$**

両辺を2乗して $x+5=9$。$x=4$ は元の式を満たす。

</details>

## 問11
$\sqrt{2x+3}=x$ を解け。

<details><summary>解答</summary>

**答: $x=3$**

右辺も非負だから $x\geq0$。2乗すると $x^2-2x-3=0$ より候補は $3,-1$ だが、条件と元の式を満たすのは $3$ のみ。

</details>

## 問12
$\sqrt{x+6}=x-2$ を解け。

<details><summary>解答</summary>

**答: $x=5$**

$x-2\geq0$ が必要。2乗して $x+6=(x-2)^2$、すなわち $(x-5)(x+2)=0$。候補 $5,-2$ のうち条件を満たすのは $5$。

</details>

---

## 2.5 分数方程式

## 問13
$\dfrac{3}{x}=1$ を解け。

<details><summary>解答</summary>

**答: $x=3$**

定義域は $x\neq0$。両辺に $x$ を掛けると $x=3$。

</details>

## 問14
$\dfrac{1}{x-1}+\dfrac{1}{x+1}=1$ を解け。

<details><summary>解答</summary>

**答: $x=1\pm\sqrt2$**

$x\neq\pm1$。両辺に $(x-1)(x+1)$ を掛けると $2x=x^2-1$。よって $x^2-2x-1=0$ で、両解とも除外値ではない。

</details>

## 問15
$\dfrac{x^2-4}{x-2}=0$ を解け。

<details><summary>解答</summary>

**答: $x=-2$**

もとの式で $x\neq2$。分子 $(x-2)(x+2)=0$ の候補は $2,-2$ だが、$2$ は定義域外である。

</details>

---

## 2.6 一次不等式

## 問16
$3x-5<7$ を解け。

<details><summary>解答</summary>

**答: $x<4$**

$3x<12$ より、正の数 $3$ で割る。

</details>

## 問17
$-2(3x+1)\geq10$ を解け。

<details><summary>解答</summary>

**答: $x\leq-2$**

$-6x-2\geq10$ より $-6x\geq12$。負の数 $-6$ で割るため不等号を逆転する。

</details>

## 問18
$\begin{cases}2x-1\geq3\\3x+2<11\end{cases}$ を解き、区間で表せ。

<details><summary>解答</summary>

**答: $2\leq x<3$、区間表示は $[2,3)$**

第1式は $x\geq2$、第2式は $x<3$。その共通部分を取る。

</details>

---

## 2.7 二次不等式

## 問19
$x^2-5x+6>0$ を解け。

<details><summary>解答</summary>

**答: $x<2$ または $x>3$**

$(x-2)(x-3)>0$。上に開く放物線なので2つの零点の外側で正になる。

</details>

## 問20
$-x^2+4x+5\geq0$ を解け。

<details><summary>解答</summary>

**答: $-1\leq x\leq5$**

$-(x-5)(x+1)\geq0$、すなわち $(x-5)(x+1)\leq0$。零点を含む間が解である。

</details>

## 問21
$x^2+2x+5<0$ を解け。

<details><summary>解答</summary>

**答: 実数解なし**

$x^2+2x+5=(x+1)^2+4>0$ はすべての実数で正なので、$0$ 未満にはならない。

</details>

---

## 2.8 恒等式と係数比較

## 問22
$(a+1)x+3\equiv4x+b$ となる定数 $a,b$ を求めよ。

<details><summary>解答</summary>

**答: $a=3,\ b=3$**

$x$ の係数から $a+1=4$、定数項から $3=b$。

</details>

## 問23
$x^2+5x+6\equiv(x+p)(x+q)$ かつ $p\leq q$ のとき、$p,q$ を求めよ。

<details><summary>解答</summary>

**答: $p=2,\ q=3$**

右辺は $x^2+(p+q)x+pq$。係数比較により $p+q=5,pq=6$ で、順序条件から $(p,q)=(2,3)$。

</details>

## 問24
$3x^2-x+5\equiv A(x-1)^2+B(x-1)+C$ となる $A,B,C$ を求めよ。

<details><summary>解答</summary>

**答: $A=3,\ B=5,\ C=7$**

右辺を展開すると $Ax^2+(-2A+B)x+(A-B+C)$。係数比較から $A=3$、$-6+B=-1$、$3-5+C=5$。

</details>
