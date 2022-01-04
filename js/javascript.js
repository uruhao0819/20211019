document.write("javascript!");

// 資料型別 (原生) :數值 (number) 、字串 (string) 、布林 (boolean) 、未定義 (underfined) 、空值 (null)
// 物件型別 (object) 、符號 (symbol)

// 數值 整數 浮點數 (小數點)
// 宣告變數 var
var a = 1 + 2;
document.write("<br>" + a);

// 0.300000000000000004 :使用 IEEE 754 標準 雙精準度算法 (64位元)
var b = 0.1 + 0.2;
document.write("<br>" + b);

// 修正方式
// 1. 將數值比例放大，變成非浮點數，運算之後再除以放大的倍數
var b1 = (0.1 * 10 + 0.2 * 10) / 10;
document.write("<br>" +"將數值比例放大"+ b1);

// 2. 內建函數 toFixed 強制取到小數點的指定位數
var c = (0.1 + 0.2);
document.write("<br>" + c.toFixed(3) + "<br>");

// 字串 用 雙引號「"」 或 單引號「'」框住的字元
var string = "測試";
var mystring = '文章';
var SmS = string + mystring;
document.write( string + mystring );

// 字串的長度，length (字串物件的屬性)
document.write( "<br>" + SmS.length);

// 布林 (boolean) 只有兩種，ture(1)與false(0)
// false、0、空字串 ("") or ('') 、NaN、null、未定義 (undefined) ; 布林值都為 false(0)
// 其他值為 ture(1)
document.write("<br> Boolean(0)" + Boolean(NaN));
document.write("<br> Boolean(123)" + Boolean(123));

// 未定義 (undefined) 變數沒有被宣告 ; 或是變數，但沒給值
var X;
y = 1; // 設定名稱，給予值，javascript 會將其轉換為變數
document.write("<br>" + y);

// 空值 null 清除變數內的值
var z = 2;
document.write("<br>" + z);
z = null;
document.write("<br>" + z);

// NaN無效的數字 轉換類別 1. 字串轉為數字
var F = "a";
var f = "123";
FF = Number(F);
ff = Number(f);

document.write("<br> F = a &nbsp;" + FF);
document.write("<br> f = 123 &nbsp;" + ff);

// 2. 無意義的運算 0除以0
document.write("<br>" + 0/0 );

// Infinity 無限大 被除數(10) / 除數(0) ; 被除數為任意數字 (除了 0 之外) / 除數 (0) = 無限大
document.write("<br>" + -10/0 );

// 宣告變數 var ES6 let const (常數)
// var 宣告的作用域
// 1. 全域變數 : 不在函數內宣告，在此程式文件內都有作用 2. 區域變數 : 在函數宣告，只對於目前宣告的函數有作用
// 自訂義函數 function name(){程式碼};
var AA = 2; //全域變數
function cal() {
    // 連續宣告變數
    var AA = 5, b = 1; //區域變數
    document.write("<br> a+b =" + (AA+b));
}
cal();
document.write("<br>" + AA)

var a = 2; //全域變數
function cal() {
    // 連續宣告變數
    // a = 5, B; 宣告變數給予值時，可以不用 var 定義 ; 宣告變數不予值時，需要用 var 定義才會成立
    a = 5, b = 1; //全域變數
    document.write("<br> a+b =" + (a+b));
}
cal();
document.write("<br>" + a)

// let 宣告的作用域 會因 { 區塊敘述 } 而分別定義為 全域或區域 的型態

var a=5, b=0;
let x=2, Y=0;
{
    var c= a+b;
    let z= x+Y;
}
// 測試可用 控制台 呼叫
console.log("c=", c);
console.log("z=", z);

// var 的全域或區域的作用，只存在 function ( 函數 ) 之內
// { 區塊敘述 } if、eles、for、while
// 判斷式 if {} eles {}

document.getElementById('TestBox').textContent="1234";

// 確認對話框 '提示訊息'
window.confirm('繼續請按確認，退出請按取消');