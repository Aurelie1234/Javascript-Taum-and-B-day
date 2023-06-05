function taumBday(b, w, bc, wc, z) {
    // Write your code here
    
[b, w, bc, wc, z] = [b, w, bc, wc, z].map(n => BigInt(n));


if (bc > (wc + z) ) {
    return (b+w)*wc + b*z
     
}


else if (wc > (bc + z) ){
    return b*bc + w*(bc+z)
    
}  


else  {
    return b*bc + w*wc
   
}
 

}



}
