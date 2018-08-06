/*
STORE date with 7
LOOP i=0 to 31 minus date
  STORE tampung with []
  IF date mod 5 equals to 0
    DO print 'Tanggal ' plus date plus ': Tempat Fitnes Libur'
  ELSE
    IF i mod 2 equals to 0
      DO PUSH 'Tono' to tampung
    IF i mod 4 equals to 0
      DO PUSH 'Anton' to tampung
    IF i mod 5 equals to 0
      DO PUSH 'Budi' to tampung
 */

var date = 7
for(var i=0;i<=31-7;i++){
    var tampung = []
    if (date%5 ==0) console.log('Tanggal '+date+' : Tempat Fitnes Libur')
    else {
      if(i%2==0) tampung.push('Tono')
      if(i%4==0) tampung.push('Anton')
      if(i%5==0) tampung.push('Budi')
      console.log('Tanggal '+date+' : '+tampung.join(', '))
    }
    date++
}
