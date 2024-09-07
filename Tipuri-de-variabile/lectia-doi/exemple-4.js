/** scrie un cod prin care sa compari 2 nr daca sunt mai mari de 100
 * sa afisezi maximul dintre ele daca nu
 * suma dintre B si nr 512;
 *
 */

const a = 90;
const b = 150;

const istarger = a > 100 && b > 100;

if(istarger)
{
    console.log(Math.max(a,b));

}
else {
    console.log(b+512);
}