# 第5章 三角関数

三角関数は、三角形の辺の比を一般の角へ拡張した関数である。角度と座標を結びつけることで、周期的な現象を式とグラフで表せるようになる。

---

## 5.1 弧度法

半径 $r$ の円で、長さ $r$ の弧に対する中心角を **$1$ ラジアン** と定める。弧度法で表した角を $\theta$ とすると、度数法との関係は

$$
180^\circ=\pi\ \mathrm{rad},\qquad
1^\circ=\frac{\pi}{180}\ \mathrm{rad}
$$

である。通常、角を表す式では単位 $\mathrm{rad}$ を省略する。半径 $r$、中心角 $\theta$ の扇形について、$\theta$ を弧度法で表せば、弧の長さ $l$ と面積 $S$ は

$$
l=r\theta,\qquad S=\frac12r^2\theta
$$

となる。

> **例題 5.1** $150^\circ$ を弧度法で表し、半径 $6$、中心角 $150^\circ$ の扇形の弧の長さと面積を求めよ。
>
> <details><summary>解答</summary>
>
> $150^\circ=150\cdot\dfrac{\pi}{180}=\dfrac{5\pi}{6}$ である。したがって
> $$
> l=6\cdot\frac{5\pi}{6}=5\pi,\qquad
> S=\frac12\cdot6^2\cdot\frac{5\pi}{6}=15\pi.
> $$
> </details>

> **注意** $l=r\theta$ と $S=\frac12r^2\theta$ は、$\theta$ が弧度法で表されているときに限り、そのまま使える。

---

## 5.2 一般角と三角関数

$x$ 軸の正の向きを始線とし、反時計回りを正、時計回りを負として測った角を **一般角** という。角 $\theta$ と $\theta+2k\pi$（$k$ は整数）は同じ終辺をもつ。

原点を中心とする単位円上で、角 $\theta$ の終辺との交点を $P(x,y)$ とする。このとき

$$
\cos\theta=x,\qquad \sin\theta=y,\qquad
\tan\theta=\frac{y}{x}\quad(x\ne0)
$$

と定める。したがって $\tan\theta$ は $\cos\theta=0$ のとき定義されない。

代表的な値は次の通りである。

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---:|---:|---:|---:|---:|
| $\sin\theta$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ |
| $\tan\theta$ | $0$ | $\dfrac{1}{\sqrt3}$ | $1$ | $\sqrt3$ | 定義されない |

単位円の座標から、基本関係

$$
\sin^2\theta+\cos^2\theta=1,
\qquad \tan\theta=\frac{\sin\theta}{\cos\theta}
$$

が得られる。第I、II、III、IV象限における $(\sin\theta,\cos\theta,\tan\theta)$ の符号は、それぞれ $(+,+,+)$、$(+,-,-)$、$(-,-,+)$、$(-,+,-)$ である。

> **例題 5.2** $\theta=\dfrac{5\pi}{6}$ の三角関数の値を求めよ。
>
> <details><summary>解答</summary>
>
> 基準となる角は $\pi-\dfrac{5\pi}{6}=\dfrac{\pi}{6}$ で、終辺は第II象限にある。よって
> $$
> \sin\frac{5\pi}{6}=\frac12,\qquad
> \cos\frac{5\pi}{6}=-\frac{\sqrt3}{2},\qquad
> \tan\frac{5\pi}{6}=-\frac{1}{\sqrt3}.
> $$
> </details>

---

## 5.3 三角関数の性質とグラフ

三角関数には次の周期性と対称性がある。

$$
\begin{aligned}
\sin(\theta+2\pi)&=\sin\theta,& \sin(-\theta)&=-\sin\theta,\\
\cos(\theta+2\pi)&=\cos\theta,& \cos(-\theta)&=\cos\theta,\\
\tan(\theta+\pi)&=\tan\theta,& \tan(-\theta)&=-\tan\theta.
\end{aligned}
$$

- $y=\sin x$ と $y=\cos x$ の定義域は実数全体、値域は $-1\le y\le1$、周期は $2\pi$ である。
- $y=\tan x$ の定義域からは $x=\dfrac{\pi}{2}+k\pi$ を除く。値域は実数全体、周期は $\pi$ で、除いた直線が垂直漸近線となる。

$y=a\sin(bx+c)+d$ では、振幅が $|a|$、周期が $\dfrac{2\pi}{|b|}$、中心線が $y=d$ である。$bx+c=b\left(x+\dfrac cb\right)$ より、横方向には $-\dfrac cb$ だけ平行移動する。余弦でも同様である。

> **例題 5.3** $y=2\sin\left(3x-\dfrac{\pi}{2}\right)+1$ の振幅、周期、中心線、横方向の移動を答えよ。
>
> <details><summary>解答</summary>
>
> $3x-\dfrac{\pi}{2}=3\left(x-\dfrac{\pi}{6}\right)$ だから、振幅は $2$、周期は $\dfrac{2\pi}{3}$、中心線は $y=1$ である。$y=2\sin3x+1$ を右へ $\dfrac{\pi}{6}$ 平行移動したグラフになる。
> </details>

> **注意** $y=\sin bx$ の周期は $2\pi b$ ではなく $\dfrac{2\pi}{|b|}$ である。

---

## 5.4 三角方程式と三角不等式

単位円で同じ座標や符号をもつ角を探すと、一般解を表せる。$k\in\mathbb Z$ として、基本形は

$$
\begin{aligned}
\sin x=\sin\alpha&\iff x=\alpha+2k\pi\ \text{または}\ x=\pi-\alpha+2k\pi,\\
\cos x=\cos\alpha&\iff x=2k\pi\pm\alpha,\\
\tan x=\tan\alpha&\iff x=\alpha+k\pi.
\end{aligned}
$$

範囲が指定された方程式では、まず一般解を考え、その範囲に入る解だけを残す。不等式では、単位円またはグラフ上で条件を満たす区間を読み取る。

> **例題 5.4** $0\le x<2\pi$ において、$2\sin x-1=0$ を解け。
>
> <details><summary>解答</summary>
>
> $\sin x=\dfrac12$ である。単位円で $y$ 座標が $\dfrac12$ となる第I象限と第II象限の角を選び、
> $$
> x=\frac{\pi}{6},\quad\frac{5\pi}{6}.
> $$
> </details>

> **例題 5.5** $0\le x<2\pi$ において、$\cos x<-\dfrac12$ を解け。
>
> <details><summary>解答</summary>
>
> $\cos x$ は単位円上の $x$ 座標である。境界は $x=\dfrac{2\pi}{3},\dfrac{4\pi}{3}$ で、その間では $x$ 座標が $-\dfrac12$ より小さい。厳密不等号なので端点を含めず、
> $$
> \frac{2\pi}{3}<x<\frac{4\pi}{3}.
> $$
> </details>

> **注意** 方程式で元の式を $\sin x$ や $\cos x$ で割ると、その値が $0$ となる解を失うことがある。割る前に場合分けする。

---

## 5.5 加法定理とその帰結

加法定理は次の通りである。

$$
\begin{aligned}
\sin(\alpha\pm\beta)&=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta,\\
\cos(\alpha\pm\beta)&=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta,\\
\tan(\alpha\pm\beta)&=\frac{\tan\alpha\pm\tan\beta}{1\mp\tan\alpha\tan\beta}.
\end{aligned}
$$

最後の式は、両辺が定義される場合に用いる。$\alpha=\beta=\theta$ とすれば倍角公式

$$
\sin2\theta=2\sin\theta\cos\theta,
\qquad \cos2\theta=\cos^2\theta-\sin^2\theta
$$

を得る。$\cos2\theta=1-2\sin^2\theta=2\cos^2\theta-1$ と変形すると、半角の関係

$$
\sin^2\frac{\theta}{2}=\frac{1-\cos\theta}{2},
\qquad
\cos^2\frac{\theta}{2}=\frac{1+\cos\theta}{2}
$$

も得られる。また、$a\sin x+b\cos x$ は $R=\sqrt{a^2+b^2}$ とし、$R\cos\phi=a$、$R\sin\phi=b$ を満たす $\phi$ を選べば

$$
a\sin x+b\cos x=R\sin(x+\phi)
$$

と合成できる。

> **例題 5.6** $\sin75^\circ$ を求めよ。
>
> <details><summary>解答</summary>
>
> $75^\circ=45^\circ+30^\circ$ として加法定理を使う。
> $$
> \sin75^\circ
> =\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ
> =\frac{\sqrt6+\sqrt2}{4}.
> $$
> </details>

> **例題 5.7** $\sin x+\sqrt3\cos x$ を一つの三角関数に合成せよ。
>
> <details><summary>解答</summary>
>
> $R=\sqrt{1^2+(\sqrt3)^2}=2$ である。$2\cos\phi=1$、$2\sin\phi=\sqrt3$ より $\phi=\dfrac{\pi}{3}$ とできるので、
> $$
> \sin x+\sqrt3\cos x=2\sin\left(x+\frac{\pi}{3}\right).
> $$
> </details>

> **注意** $\cos(\alpha-\beta)$ の第2項は $+\sin\alpha\sin\beta$ である。符号を暗記するだけでなく、$\cos(\alpha\pm\beta)$ の記号が式中では反転すると確認する。

---

## 章末チェック

- [ ] 度とラジアンを変換し、扇形の弧の長さと面積を計算できる
- [ ] 単位円から一般角の $\sin$、$\cos$、$\tan$ の値と符号を求められる
- [ ] 三角関数の定義域・値域・周期・対称性を説明し、変換されたグラフを読める
- [ ] 指定範囲または一般角で三角方程式と三角不等式を解ける
- [ ] 加法定理、倍角・半角公式、三角関数の合成を適切に使える
