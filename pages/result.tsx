import React, { Component } from 'react'

export default function Result() {
  return (
    <div className="result">
      <h1>結果</h1>
      <p>
        現在の所持金<span className="money_possession">12万円</span>
      </p>

      <div className="grid-table">
        <div className="row">
          <div>日付</div>
          <div>会場</div>
          <div>投資金額</div>
          <div>損益</div>
          <div>的中</div>
        </div>
        <div className="row">
          <div>2020/10/11</div>
          <div>住之江10R</div>
          <div>100</div>
          <div>+560</div>
          <div>○</div>
        </div>
        <div className="row">
          <div>2020/10/11</div>
          <div>住之江11R</div>
          <div>100</div>
          <div>+560</div>
          <div>○</div>
        </div>
      </div>

      <style jsx>{`
        .result {
        }
        .money_possession {
          padding: 0 2px;
          font-size: 16px;
        }
        .grid-table {
          width: 100%;
          margin 0 20px;
          display: grid;
          grid-template-columns:
            calc(100vw * 0.2)
            calc(100vw * 0.2)
            calc(100vw * 0.2)
            calc(100vw * 0.2)
            calc(100vw * 0.1);
        }
        .grid-table > .row {
          display: contents;
        }
      `}</style>
    </div>
  )
}
