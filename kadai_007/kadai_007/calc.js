// 変数numに0～100までのランダムな整数を代入する
num = Math.floor(Math.random() *100);
 
// 変数numの値を出力する（確認用）
console.log(num);




if (num%15===0) {
    console.log('3と5の倍数です');
  }

  else if(num%5===0){
    console.log('5の倍数です')
  }

  else if(num%3 === 0){
    console.log('3の倍数です')
  }

   // それ以外のときは、「はずれです」という文字列を出力する
   else {
     console.log('はずれです');
   }
