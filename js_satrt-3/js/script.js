//Это моя домашка


let userColorEyes;
let user = ' ';
let userName = 'Вася';
user = userName;
console.log(user);


//ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ
//Видимость переменных только внутри блока инструкций
function testBlock() {
    let myAge = 36;
    console.log(myAge);
}
testBlock();

console.log(myAge); //Переменная не видна за пределами блока






/* //Зарезервированные ключевые слова 
Зарезервированные ключевые слова в ECMAScript 2015
break
case
class
catch
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
let
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
Ключевые слова, зарезервированные на будущее
Следующие ключевые слова зарезервированы на будущее ECMAScript спецификацией. За ними сейчас не стоит никакой функциональности, но она может появиться в будущих версиях, поэтому эти ключевые слова не могут быть использованы, как идентификаторы. Эти ключевые слова не могут быть использованы даже в strict или non-strict режимах.

enum
await
Следующие ключевые слова зарезервированы для кода, который 
выполняется в strict режиме:

implements
package
protected
static
interface
private
public
Зарезервированные ключевые слова в более старых версиях
Перечисленные ниже ключевые слова зарезервированы для 
старых версий ECMAScript спецификаций (ECMAScript от 1 по 3).

abstract
boolean
byte
char
double
final
float
goto
int
long
native
short
synchronized
transient
volatile
К тому же, литералы null, true, и false 
зарезервированы в ECMAScript для их 
обычной функциональности.*/