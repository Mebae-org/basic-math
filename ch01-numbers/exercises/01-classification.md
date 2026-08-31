# 練習 1.1 数の分類

> 対応: [`docs/index.md` 1.1](../docs/index.md)

## 問1
次の数を、有理数と無理数に分類せよ。

$$
6,\quad \sqrt{25},\quad \sqrt{3},\quad -\frac{2}{9},\quad 0.\overline{6}\ (=0.666\dots),\quad \pi
$$

<details><summary>解答</summary>

- 有理数: $6,\ \sqrt{25}\,(=5),\ -\dfrac{2}{9},\ 0.\overline{6}\,(=\tfrac{2}{3})$
- 無理数: $\sqrt{3},\ \pi$

循環小数は有理数、ルートの中身が平方数なら有理数になる点に注意。
</details>

## 問2
$\sqrt{2}$ が無理数であることを踏まえ、次のうち無理数はどれか。

$$
2+\sqrt{2},\quad \sqrt{2}\times\sqrt{2},\quad \frac{\sqrt{2}}{2}
$$

<details><summary>解答</summary>

- $2+\sqrt{2}$: 無理数（有理数＋無理数は無理数）
- $\sqrt{2}\times\sqrt{2}=2$: 有理数
- $\dfrac{\sqrt{2}}{2}$: 無理数

</details>

## 問3
「すべての整数は有理数である」は正しいか。理由も述べよ。

<details><summary>解答</summary>

正しい。整数 $n$ は $\dfrac{n}{1}$ と表せるので、有理数の定義 $\dfrac{m}{n}\,(n\neq0)$ を満たす。したがって $\mathbb{Z}\subset\mathbb{Q}$。
</details>
