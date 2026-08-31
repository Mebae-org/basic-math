#!/usr/bin/env node
'use strict';

/**
 * 正解のハッシュを生成する補助スクリプト。
 *
 *   node scripts/make-answer-hash.js "答え"
 *
 * 引数の文字列を正規化して SHA-256 を出力します。
 * ここで出た 64 桁の 16 進文字列を .github/workflows/quiz.yml の
 * answerHashes に貼り付けてください。正解の平文はリポジトリに残しません。
 *
 * 答えは数値を想定。学生は全角数字（３）や全角記号（．／−）で入力しがちなので、
 * 全角英数記号を半角へ寄せ、空白をすべて除去してから照合します。
 *
 * 重要: 下の normalize() は quiz.yml の normalize() と完全に一致させること。
 *       片方だけ変更すると採点が壊れます。
 */

const crypto = require('crypto');

function normalize(s) {
  return String(s)
    // 全角英数記号（！-～ = U+FF01–FF5E）を半角へ
    .replace(/[！-～]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0xfee0)
    )
    // 各種マイナス記号（− – —）を半角ハイフンへ
    .replace(/[−–—]/g, '-')
    // 空白（半角・タブ・改行・全角スペース U+3000）をすべて除去
    .replace(/[\s　]/g, '');
}

function sha256(s) {
  return crypto.createHash('sha256').update(normalize(s), 'utf8').digest('hex');
}

// argv[2] 以降を結合（スペース込みでも受けられる。どのみち normalize で除去）。
const input = process.argv.slice(2).join(' ');

if (input.length === 0) {
  console.error('Usage: node scripts/make-answer-hash.js <answer>');
  process.exit(1);
}

console.log(sha256(input));
