import React, { Component } from 'react'
import { apiClient } from '~/utils/apiClient'
import useAspidaSWR from '@aspida/swr'

const money = []
const odds = []

const send_api = () => {
  console.log('データベースの値取得')
}

const handleSubmit = (event) => {
  event.preventDefault()
  send_api()
  console.log(event.target)
  console.log(event.target.elements.money.value)
  console.log(event.target.elements.loss_cut.value)
  console.log(event.target.elements.odds_buy.value)
  console.log(event.target.elements.start_date.value)
  console.log(event.target.elements.end_date.value)
  console.log(event.target.elements.method_buy.value)
}

const cocomo_method = () => {
  console.log('ココモ法')
}

export default function Result() {
  const { data } = useAspidaSWR(apiClient.expected, {
    query: {
      plan: 'lte4x',
      rule: 'cocomo'
    }
  })
  const results = data?.results || []
  return (
    <div className="result">
      <h1>過去の結果から予測</h1>
      <h2>設定</h2>
      <form className="setting" onSubmit={handleSubmit}>
        <div className="setting_cell">
          <span className="setting_title">所持金</span>
          <input name="money" type="number" value="120000" />円
        </div>
        <div className="setting_cell">
          損切
          <span className="setting_title">
            損切（設定した金額が掛け金の上限値）
          </span>
          <input name="loss_cut" type="number" />円
        </div>
        <div className="setting_cell">
          <span className="setting_title">期間</span>
          <div>
            <input type="date" name="start_date" />〜
            <input type="date" name="end_date" />
          </div>
        </div>
        <div className="setting_cell">
          <span className="setting_title">買い方</span>
          <select name="odds_buy">
            <option value="1">4倍以下買い</option>
            <option value="2">6倍以下買い</option>
            <option value="3">未定</option>
            <option value="4">未定</option>
          </select>
        </div>
        <div className="setting_cell">
          <span className="setting_title">掛け方</span>
          <select name="method_buy">
            <option value="1">ココモ法</option>
            <option value="3">マーチンゲール法</option>
            <option value="2">ローリスク・ローリターン</option>
            <option value="4">未定</option>
          </select>
        </div>
        <button className="setting_submit" type="submit">
          実行
        </button>
      </form>
      <div className="grid-table">
        <div className="row">
          <div>日付</div>
          <div>会場</div>
          <div>投資金額</div>
          <div>損益</div>
          <div>所持金</div>
        </div>
        {results.map((result) => (
          <div className="row">
            <div>{new Date(result.date).toLocaleDateString()}</div>
            <div>{result.kaijyo}</div>
            <div>{result.price}</div>
            <div>{result.plusminus}</div>
            <div>{result.credit}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .result {
          margin: 0 12px;
        }
        .setting{
          border: 1px solid #333;
          padding: 8px;
        }
        .setting_title{
          margin-right: 8px;
        }
        .money_possession {
          padding: 0 2px;
          font-size: 16px;
        }
        .setting_cell{
          margin-bottom 8px;
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
