export const Practice2 = () => {
  const getTatalFee = (num: number): number => {
    const total = num * 1.1;
    // 関数の戻り値指定がnumberなのでtotal.toString()で
    // 文字列化された値をreturnできないエラーが出る
    return total.toString();
  };
  const onClickPractice = () => console.log(getTatalFee(1000));
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
