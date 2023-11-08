export const Practice3 = () => {
  // 下記関数の戻り値指定を削除し定数totalを文字列化（toString ）
  const getTatalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };
  const onClickPractice = () => {
    let total: number = 0;
    // getTatalFeeの戻り値指定が無く、戻り値が文字列で返される場合でも
    // let total: numberの定義があるのでstringの再代入を弾くエラーが出る
    total = getTatalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
